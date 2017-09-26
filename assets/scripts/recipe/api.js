const config = require('./../config')
const store = require('../store')

const addRecipe = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  addRecipe
}
