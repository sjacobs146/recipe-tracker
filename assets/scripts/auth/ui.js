'use strict'

const store = require('../store')
const reset = require('../forms/reset')

const signUpSuccess = function (data) {
  $('#message').text('Successful signup')
  $('.signUp').addClass('hidden')
  reset.resetForm($('#signUp'))
  $('#signIn').collapse('show')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
}

const signInSuccess = function (data) {
  $('#message').text('Successful sign in!')
  store.user = data.user
  $('#signIn').collapse('hide')
  $('#signInMenuItem').addClass('hidden')
  $('#signUpMenuItem').addClass('hidden')
  $('.signedIn').removeClass('hidden')
  $('#addRecipe').collapse('show')
}

const signInFailure = function (error) {
  $('#message').text('Invalid email address or password, please try again')
}

const signOutSuccess = function () {
  store.user = null
  $('#message').text('Successful sign out')
  $('.signedIn').addClass('hidden')
  $('#signInMenuItem').removeClass('hidden')
  $('#signInMenuItem').addClass('active')
  $('#signUpMenuItem').removeClass('hidden')
  reset.resetForm($('#signIn'))
  reset.resetForm($('#edit-recipe'))
  reset.resetForm($('#add-recipe'))
  reset.resetForm($('#findRecipe'))
  $('.displayRecipe').empty()
  $('#signIn').collapse('show')
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
}

const changePasswordSuccess = function () {
  $('#message').text('Successful password change')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
