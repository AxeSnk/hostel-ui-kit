import Burger from './script/Burger'

$(document).ready(() => {
  $('.js-header__nav').each((i, root) => new Burger(root));
})