'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const reset = require('../forms/reset')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

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
  const searchString = getFormFields(this).name.toUpperCase()
  $('.displayRecipe').empty()
  // TODO: use cache instead of calling api every time
  api.getRecipesForUser()
    .then(ui.getRecipesForUserSuccess)
    .then(() => {
      if (store.recipes != null) {
        let matchingRecipes = []
        if (searchString === '') {
          matchingRecipes = store.recipes
        } else {
          matchingRecipes = store.recipes.filter(recipe => recipe.name.toUpperCase().includes(searchString))
          if (matchingRecipes.length === 0) {
            $('#message').text('No recipes match your search')
          } else {
            reset.resetForm($('#findRecipe'))
          }
        }
        const showRecipesHtml = showRecipesTemplate({ recipes: matchingRecipes })
        $('.displayRecipe').append(showRecipesHtml)
        $('.deleteRecipeButton').on('click', onDelete)
      }
    })
    .catch(ui.getRecipesForUserFailure)
}

const onDelete = function () {
  api.deleteRecipe($(this).parent().parent().data('id'))
    .then(ui.deleteRecipeSuccess)
    .then($(this).parent().parent().empty())
    .catch(ui.deleteRecipeFailure)
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
