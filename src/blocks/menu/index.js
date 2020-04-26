import Menu from './Menu';

$(document).ready(() => {
  $('.js-menu').each((i, root) => new Menu(root));
})