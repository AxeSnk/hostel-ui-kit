import CheckboxList from './script/CheckboxList';

document.querySelectorAll('.js-checkbox-list').forEach((root) => new CheckboxList(root));

// $(document).ready(() => {
//   $('.js-checkbox-list').each((i, root) => new CheckboxList(root));
// });
