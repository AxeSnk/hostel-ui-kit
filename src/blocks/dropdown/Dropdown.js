import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import ButtonsDD from '../dropdown/ButtonsDD.js';

$(document).ready(() => {
  const defaultText = 'Сколько гостей';

  $('.js-dropdown__guests').iqDropdown({
    maxItems: 9,
    minItems: 0,
    setSelectionText(itemCount, totalItems) {
      let text;
      if (totalItems == 0) {
        text = defaultText;
        return `${text}`;
      } else {
        if (totalItems > 4) {
          text = 'гостей';
        } else if (totalItems == 1) {
          text = 'гость';
        } else {
          text = 'гостя';
        }
        return `${totalItems} ${text}`;
      }
    },
    onChange: (id, count, totalItems) => {
      new ButtonsDD(totalItems);
    },

  });
});


$(document).ready(() => {
  const defaultText = '2 спальни, 2 кровати';

  $('.js-dropdown__rooms').iqDropdown({
    maxItems: 9,
    minItems: 0,
    setSelectionText(itemCount, totalItems) {
      let text;
      if (itemCount == 0, totalItems == 0) {
        text = defaultText;
        return `${text}`;
      } else {
        if (totalItems > 4) {
          text = 'гостей';
        } else if (totalItems == 1) {
          text = 'гость';
        } else {
          text = 'гостя';
        }
        return `${totalItems} ${text}`;
      }
    },
    onChange: (id, count, totalItems) => {
      let clearButton = $('.js-dropdown__rooms .button__clear');
      totalItems > 0
        ? clearButton.attr('style', 'display: block')
        : clearButton.attr('style', 'display: none');
    },

  });

});
