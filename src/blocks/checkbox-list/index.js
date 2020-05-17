import CheckboxList from './CheckboxList';

$(document).ready(() => {
  $('.js-checkbox-list').each((i, root) => new CheckboxList(root));
})
