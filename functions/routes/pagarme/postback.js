const qs = require('qs')
const pagarme = require('pagarme')
const getAppData = require('../../lib/store-api/get-app-data')
const parseStatus = require('../../lib/payments/parse-status')
const axios = require('axios')

exports.post = ({ appSdk }, req, res) => {
  // https://docs.pagar.me/docs/gerenciando-postbacks
  let pagarmeTransaction = req.body && req.body.transaction
  if (pagarmeTransaction && pagarmeTransaction.metadata) {
    let storeId = parseInt(pagarmeTransaction.metadata.store_id, 10)
    let orderId = pagarmeTransaction.metadata.order_id

    if (storeId > 100 && /^[a-f0-9]{24}$/.test(orderId)) {
      let pagarmeStatus = req.body.current_status || pagarmeTransaction.status
      console.log('> Postback #', storeId, orderId, pagarmeStatus)
      // read configured E-Com Plus app data
      return getAppData({ appSdk, storeId })
        .then(async config => {
          // validate Pagar.me postback
          // https://github.com/pagarme/pagarme-js/issues/170#issuecomment-503729557
          const apiKey = config.pagarme_api_key
          const verifyBody = qs.stringify(req.body)
          const signature = req.headers['x-hub-signature'].replace('sha1=', '')

          if (!pagarme.postback.verifySignature(apiKey, verifyBody, signature)) {
            const { data } = await axios({
              url: `https://api.pagar.me/1/transactions/${pagarmeTransaction.id}`,
              method: 'get',
              data: {
                api_key: apiKey
              }
            })
            pagarmeTransaction = data
            pagarmeStatus = pagarmeTransaction.status
            storeId = parseInt(pagarmeTransaction.metadata.store_id, 10)
            orderId = pagarmeTransaction.metadata.order_id
            console.log('Get order #', storeId, orderId, pagarmeStatus)
          }

          // get E-Com Plus order
          const resource = `orders/${orderId}.json`
          return appSdk
            .apiRequest(storeId, resource)
            .then(({ response }) => ({ order: response.data, config }))
        })

        .then(({ order }) => {
          // add new transaction status to payment history
          const transaction = order.transactions.find(({ intermediator }) => {
            return intermediator && intermediator.transaction_id === String(pagarmeTransaction.id)
          })
          const resource = `orders/${order._id}/payments_history.json`
          const method = 'POST'
          const body = {
            date_time: new Date().toISOString(),
            status: parseStatus(pagarmeStatus),
            notification_code: req.body.fingerprint,
            flags: ['pagarme']
          }
          if (transaction) {
            body.transaction_id = transaction._id
          }
          if (req.body.old_status) {
            body.flags.push(`old:${req.body.old_status}`.substr(0, 20))
          }
          return appSdk.apiRequest(storeId, resource, method, body)
        })

        .then(() => {
          res.sendStatus(200)
        })
        .catch(err => {
          err.metadata = pagarmeTransaction.metadata
          console.error(err)
          res.sendStatus(500)
        })
    }
  }

  res.sendStatus(410)
}
