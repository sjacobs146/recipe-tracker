const config = require('./../config')
const store = require('../store')

const addRecipe = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getRecipesForUser = function () {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteRecipe = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addRecipe,
  getRecipesForUser,
  deleteRecipe
}
