import Dropdown from './Dropdown';

$(document).ready(() => {
  $('.js-dropdown').each((i, root) => new Dropdown(root));
})