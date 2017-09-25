'use strict'

const onShowCollapsed = function () {
  // when a collapsed div is shown hide all other collapsible divs that are visible
  $('.main-container.collapse').not($(this)).collapse('hide')
  $('#message').text('')
}

const onNavClick = function () {
  $('.nav').find('.active').removeClass('active')
  $(this).parent().addClass('active')
}

const addHandlers = function () {
  $('.nav a').on('click', onNavClick)
  $('.main-container.collapse').on('shown.bs.collapse', onShowCollapsed)
}

module.exports = {
  addHandlers
}
