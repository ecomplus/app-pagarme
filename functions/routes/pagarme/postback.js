const qs = require('qs')
const pagarme = require('pagarme')
const getAppData = require('../../lib/store-api/get-app-data')
const parseStatus = require('../../lib/payments/parse-status')

exports.post = ({ appSdk }, req, res) => {
  // https://docs.pagar.me/docs/gerenciando-postbacks
  const pagarmeTransaction = req.body && req.body.transaction
  if (pagarmeTransaction && pagarmeTransaction.metadata) {
    const storeId = parseInt(pagarmeTransaction.metadata.store_id, 10)
    const orderId = pagarmeTransaction.metadata.order_id

    if (storeId > 100 && /^[a-f0-9]{24}$/.test(orderId)) {
      console.log('> Postback #', storeId, orderId, (req.body.current_status || pagarmeTransaction.status))
      // read configured E-Com Plus app data
      return getAppData({ appSdk, storeId })
        .then(config => {
          // validate Pagar.me postback
          // https://github.com/pagarme/pagarme-js/issues/170#issuecomment-503729557
          const apiKey = config.pagarme_api_key
          const verifyBody = qs.stringify(req.body)
          const signature = req.headers['x-hub-signature'].replace('sha1=', '')
          if (storeId == 51372) {
            console.log('Verify body', verifyBody)
            console.log('signature', signature)
            console.log('api key', apiKey)
            console.log('checking pagarme', pagarme.postback.verifySignature(apiKey, verifyBody, signature))
          }

          if (!pagarme.postback.verifySignature(apiKey, verifyBody, signature) && verifyBody && signature) {
            return res.sendStatus(403)
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
            status: parseStatus(req.body.current_status || pagarmeTransaction.status),
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
