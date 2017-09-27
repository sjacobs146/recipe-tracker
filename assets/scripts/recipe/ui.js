'use strict'

const reset = require('../forms/reset')
const showRecipesTemplate = require('../templates/recipe-listing.handlebars')
const api = require('./api')

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
    // const matchingRecipes = data.recipes.map(recipe => recipe.name === 'Tequila Lime Chicken' )
    const showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
    $('.displayRecipe').append(showRecipesHtml)
    $('.deleteRecipeButton').on('click', function () {
      api.deleteRecipe($(this).parent().parent().data('id'))
        .then(deleteRecipeSuccess)
        .catch(deleteRecipeFailure)
      // TODO: only want to do this if delete is successful
      $(this).parent().parent().empty()
    })
  } else {
    $('#message').text('No recipes found')
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
  reset.resetForm($('#edit-recipe'))
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
