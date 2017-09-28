'use strict'

const store = require('../store')
const reset = require('../forms/reset')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')

const addRecipeSuccess = function (data) {
  $('#message').text('Recipe added!')
  reset.resetForm($('#add-recipe'))
}

const addRecipeFailure = function (error) {
  $('#message').text('Error adding recipe, please try again.')
}

const getRecipesForUserSuccess = function (data) {
  if (data.recipes.length > 0) {
    $('#message').text('Recipes found!')
    store.recipes = data.recipes
  } else {
    $('#message').text('No recipes found')
    store.recipes = null
  }
}

const getRecipesForUserFailure = function (error) {
  $('#message').text('Error finding recipes for user.')
}

const deleteRecipeSuccess = function (data) {
  $('#message').text('Recipe deleted!')
}

const deleteRecipeFailure = function (error) {
  $('#message').text('Error deleting recipe, please try again.')
}

const updateRecipeSuccess = function (data) {
  $('#message').text('Recipe updated!')
  // reset.resetForm($('#edit-recipe'))
}

const updateRecipeFailure = function (error) {
  $('#message').text('Error updating recipe, please try again.')
}

module.exports = {
  addRecipeSuccess,
  addRecipeFailure,
  getRecipesForUserSuccess,
  getRecipesForUserFailure,
  updateRecipeSuccess,
  updateRecipeFailure
}
