;(function () {
  window._pagarmeHash = function (card) {
    return new Promise(function (resolve, reject) {
      // https://github.com/pagarme/pagarme-js#using-encryption-key
      const usedCard = { 
        card: {
          card_number: card.number,
          card_holder_name: card.name,
          card_expiration_date: card.month.toString() + card.year.toString(),
          card_cvv: card.cvc
        }
      }
      const validateObject = window.pagarme.validate(usedCard)
      const objectCardValidated = validateObject && validateObject.card
      for (let key in objectCardValidated) {
        if (Object.hasOwnProperty.call(objectCardValidated, key)) {
          if (!objectCardValidated[key]) {
            return reject()
          }
        }
      }
      window.pagarme.client.connect({ encryption_key: window._pagarmeKey })
        .then(function (client) {
          return client.security.encrypt(usedCard.card)
        })
        .then(resolve)
        .catch(reject) 
    })
  }
}())