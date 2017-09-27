'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onAddRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  const recipe = { recipe: data }
  api.addRecipe(recipe)
    .then(ui.addRecipeSuccess)
    .catch(ui.addRecipeFailure)
}

const onFindRecipe = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.getRecipesForUser()
    .then(ui.getRecipesForUserSuccess)
    .catch(ui.getRecipesForUserFailure)
}

const onEditRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  const recipeId = data.id
  // remove empty and null entries
  $.each(data, function (key, value) {
    if (value === '' || value === null) {
      delete data[key]
    }
  })
  delete data.id
  const recipe = { recipe: data }
  api.updateRecipe(recipeId, recipe)
    .then(ui.updateRecipeSuccess)
    .catch(ui.updateRecipeFailure)
}

const addHandlers = function () {
  $('#add-recipe').on('submit', onAddRecipe)
  $('#findRecipe').on('submit', onFindRecipe)
  $('#edit-recipe').on('submit', onEditRecipe)
}

module.exports = {
  addHandlers
}
