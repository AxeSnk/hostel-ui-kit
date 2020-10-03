import Menu from './script/Menu';

$(document).ready(() => {
  $('.js-menu').each((i, root) => new Menu(root));
})