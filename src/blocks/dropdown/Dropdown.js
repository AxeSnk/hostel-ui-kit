import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css';



$(document).ready(() => {
  

  $('.js-dropdown__guest').iqDropdown({
    maxItems: 9,
    minItems: 0,
    // openingText: 'Сколько гостей',
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
});
