import Dropdown from './script/Dropdown';

$(document).ready(() => {
  $('.js-dropdown__guests').each((i, root) => new Dropdown(root));
});

$(document).ready(() => {
  $('.js-dropdown__rooms').each(
    (i, root) =>
      new Dropdown(root, {
        type: 'rooms',
        defaultText: 'Удобства',
        items: ['гостей', 'гость', 'гостя'],
        itemsBaby: ['младенцев', 'младенец', 'младенца'],
        buttons: false
      })
  );
});
  