'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onAddRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  const recipe = {
    'recipe': {
      'name': data.name,
      'serves': data.serves,
      'category': data.category,
      'ingredients': data.ingredents,
      'directions': data.directions
    }
  }
  api.addRecipe(recipe)
    .then(ui.addRecipeSuccess)
    .catch(ui.addRecipeFailure)
}

const addHandlers = function () {
  $('#add-recipe').on('submit', onAddRecipe)
}

module.exports = {
  addHandlers
}