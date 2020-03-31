import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';

$(document).ready(() => {
  $('.js-dropdown__guest').iqDropdown({
    maxItems: 9,
    minItems: 0,
    onChange: (id, count, totalItems) => {
      let clearButton = $('.button__clear');
      totalItems > 0
        ? clearButton.attr('style', 'display: block')
        : clearButton.attr('style', 'display: none');
      clearButton.on('click', (totalItems = 0));
      return totalItems;
    },
    setSelectionText(itemCount, totalItems) {
      let text;
      if (totalItems == 0) {
        text = 'Сколько гостей';
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
    }
  });

  $('.button__clear');
});
