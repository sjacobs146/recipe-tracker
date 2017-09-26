'use strict'

const reset = require('../forms/reset')

const addRecipeSuccess = function (data) {
  $('#message').text('Recipe added!')
  reset.resetForm($('#add-recipe'))
}

const addRecipeFailure = function (data) {
  $('#message').text('Recipe added!')
  reset.resetForm($('#add-recipe'))
}
module.exports = {
  addRecipeSuccess,
  addRecipeFailure
}
