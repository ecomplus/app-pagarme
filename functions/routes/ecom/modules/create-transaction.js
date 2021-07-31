const { baseUri } = require('./../../../__env')
const axios = require('axios')
const addInstallments = require('../../../lib/payments/add-installments')
const parseStatus = require('../../../lib/payments/parse-status')

exports.post = ({ appSdk }, req, res) => {
  // https://apx-mods.e-com.plus/api/v1/create_transaction/schema.json?store_id=100
  const { params, application } = req.body
  const { storeId } = req
  const config = Object.assign({}, application.data, application.hidden_data)

  const orderId = params.order_id
  const { amount, buyer, payer, to, items } = params
  console.log('> Transaction #', storeId, orderId)

  // https://apx-mods.e-com.plus/api/v1/create_transaction/response_schema.json?store_id=100
  const transaction = {
    amount: amount.total
  }

  // https://docs.pagar.me/docs/realizando-uma-transacao-de-cartao-de-credito
  // https://docs.pagar.me/docs/realizando-uma-transacao-de-boleto-bancario
  let pagarmeTransaction

  if (params.payment_method.code === 'credit_card') {
    let installmentsNumber = params.installments_number
    let finalAmount = amount.total
    if (installmentsNumber > 1) {
      if (config.installments) {
        // list all installment options
        const { gateway } = addInstallments(amount, config.installments)
        const installmentOption = gateway.installment_options &&
          gateway.installment_options.find(({ number }) => number === installmentsNumber)
        if (installmentOption) {
          transaction.installments = installmentOption
          finalAmount = transaction.installments.total = installmentOption.number * installmentOption.value
        } else {
          installmentsNumber = 1
        }
      }
    }

    pagarmeTransaction = {
      payment_method: 'credit_card',
      amount: Math.floor(finalAmount * 100),
      installments: installmentsNumber,
      card_hash: params.credit_card && params.credit_card.hash
    }
  } else {
    // banking billet
    transaction.banking_billet = {}
    pagarmeTransaction = {
      payment_method: 'boleto',
      async: false,
      amount: Math.floor(amount.total * 100)
    }

    const boleto = config.banking_billet
    if (boleto) {
      if (boleto.instructions) {
        pagarmeTransaction.boleto_instructions = boleto.instructions
          .replace(/\r\n/g, '\n')
          .replace(/\r/g, '\n')
          .substr(0, 255)
        transaction.banking_billet.text_lines = [pagarmeTransaction.boleto_instructions]
      }
      if (boleto.days_due_date) {
        const date = new Date()
        date.setDate(date.getDate() + boleto.days_due_date)
        pagarmeTransaction.boleto_expiration_date = date.toISOString().substr(0, 10)
      }
    }
  }

  pagarmeTransaction.api_key = config.pagarme_api_key
  pagarmeTransaction.postback_url = `${baseUri}/pagarme/postback`
  pagarmeTransaction.soft_descriptor = (config.soft_descriptor || `${params.domain}_PagarMe`).substr(0, 13)
  pagarmeTransaction.metadata = {
    order_number: params.order_number,
    store_id: storeId,
    order_id: orderId,
    platform_integration: 'ecomplus'
  }

  pagarmeTransaction.customer = {
    email: buyer.email,
    name: buyer.fullname,
    external_id: buyer.customer_id,
    type: buyer.registry_type === 'j' ? 'corporation' : 'individual',
    country: (buyer.doc_country || 'BR').toLowerCase(),
    phone_numbers: [`+${(buyer.phone.country_code || '55')}${buyer.phone.number}`],
    documents: [{
      type: buyer.registry_type === 'j' ? 'cnpj' : 'cpf',
      number: buyer.doc_number
    }]
  }
  const birthDate = buyer.birth_date
  if (birthDate && birthDate.year && birthDate.day) {
    pagarmeTransaction.customer.birthday = `${birthDate.year}-` +
      `${birthDate.month.toString().padStart(2, '0')}-` +
      birthDate.day.toString().padStart(2, '0')
  }

  const parseAddress = to => ({
    street: to.street,
    neighborhood: to.borough,
    city: to.city,
    state: to.province || to.province_code,
    country: to.country_code ? to.country_code.toLowerCase() : 'br',
    zipcode: to.zip,
    street_number: String(to.number) || 's/n',
    complementary: to.complement || undefined
  })
  if (to && to.street) {
    pagarmeTransaction.shipping = {
      name: to.name || buyer.fullname,
      fee: Math.floor(amount.freight * 100),
      address: parseAddress(to)
    }
    pagarmeTransaction.billing = {
      name: (payer || buyer).fullname,
      address: params.billing_address ? parseAddress(params.billing_address)
        : pagarmeTransaction.shipping.address
    }
  } else if (params.billing_address) {
    pagarmeTransaction.billing = {
      name: (payer || buyer).fullname,
      address: parseAddress(params.billing_address)
    }
  }

  pagarmeTransaction.items = []
  items.forEach(item => { 
    if (item.quantity > 0) {
      pagarmeTransaction.items.push({
        id: item.sku || item.variation_id || item.product_id,
        title: item.name || item.sku,
        unit_price: Math.floor((item.final_price || item.price) * 100),
        quantity: item.quantity,
        tangible: Boolean(to && to.street)
      })
    }
  })

  // https://docs.pagar.me/reference#criar-transacao
  axios({
    url: 'https://api.pagar.me/1/transactions',
    method: 'post',
    data: pagarmeTransaction
  })

    .then(({ data }) => {
      if (data.authorized_amount) {
        transaction.amount = data.authorized_amount / 100
      } else if (data.amount) {
        transaction.amount = data.amount / 100
      }
      transaction.intermediator = {
        payment_method: {
          code: data.payment_method || params.payment_method.code
        }
      }
      ;[
        ['id', 'transaction_id'],
        ['tid', 'transaction_code'],
        ['reference_key', 'transaction_reference']
      ].forEach(([dataField, transactionField]) => {
        if (data[dataField]) {
          transaction.intermediator[transactionField] = String(data[dataField])
        }
      })
      if (data.customer && data.customer.id) {
        transaction.intermediator.buyer_id = String(data.customer.id)
      }

      if (transaction.banking_billet) {
        if (data.boleto_barcode) {
          transaction.banking_billet.code = data.boleto_barcode
        }
        if (data.boleto_url) {
          transaction.payment_link = transaction.banking_billet.link = data.boleto_url
        }
        if (data.boleto_expiration_date) {
          transaction.banking_billet.valid_thru = new Date(data.boleto_expiration_date).toISOString()
        }
      } else if (data.card) {
        transaction.credit_card = {
          holder_name: data.card.holder_name,
          last_digits: data.card.last_digits,
          company: data.card.brand,
          token: data.card.fingerprint
        }
      }

      transaction.status = {
        updated_at: data.date_created || data.date_updated || new Date().toISOString(),
        current: parseStatus(data.status)
      }
      res.send({ transaction })
    })

    .catch(error => {
      // try to debug request error
      const errCode = 'PAGARME_TRANSACTION_ERR'
      let { message } = error
      const err = new Error(`${errCode} #${storeId} - ${orderId} => ${message}`)
      if (error.response) {
        const { status, data } = error.response
        if (status !== 401 && status !== 403) {
          err.payment = JSON.stringify(pagarmeTransaction)
          err.status = status
          if (typeof data === 'object' && data) {
            err.response = JSON.stringify(data)
          } else {
            err.response = data
          }
        } else if (data && Array.isArray(data.errors) && data.errors[0] && data.errors[0].message) {
          message = data.errors[0].message
        }
      }
      console.error(err)
      res.status(409)
      res.send({
        error: errCode,
        message
      })
    })
}
