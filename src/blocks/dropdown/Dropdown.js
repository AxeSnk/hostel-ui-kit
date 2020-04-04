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
      new ButtonsDD(totalItems);

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
    }
  });
});

$(document).ready(() => {
  const defaultText = 'Выберите кол-во комнат';

  $('.js-dropdown__rooms').iqDropdown({
    maxItems: 9,
    minItems: 0,
    setSelectionText(itemCount, totalItems, items) {
      let text = '';
      if (totalItems == 0) {
        text = defaultText;
        return `${text}`;
      } else {
        for (let key in itemCount) {
          if(itemCount[key] != 0) {
            text += `${itemCount[key]} ${key}, `;
          }
        }
        text = text.slice(0, -2);
        if(text.length > 21) {
          text = text.slice(0, 20) + '...';
        }
        return `${text}`;
      }
    },
    onChange: (id, count, totalItems) => {
      new ButtonsDD(totalItems);
    }
  });
});
