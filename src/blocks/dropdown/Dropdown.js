import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import ButtonsDD from '../dropdown/ButtonsDD.js';
import Closing from '../dropdown/Closing.js';

$(document).ready(() => {
  const defaultText = 'Сколько гостей';


  $('.js-dropdown__guests').iqDropdown({
    maxItems: 9,
    minItems: 0,
    setSelectionText(itemCount, totalItems) {
      $('.js-dropdown__guests').each(
        (i, root) => new ButtonsDD(root, totalItems)
      );

      let text;
      let textBaby;
      if (totalItems == 0) {
        text = defaultText;
        return `${text}`;
      } else {
        if(totalItems > 4) {
          text = 'гостей';
        } else if (totalItems == 1) {
          text = 'гость';
        } else {
          text = 'гостя';
        }

        if(itemCount["Младенцы"] > 4) {
          textBaby = 'младенцев'
        } else if (itemCount["Младенцы"] == 1) {
          textBaby = 'младенец'
        } else {
          textBaby = 'младенца'
        }
        
        return itemCount["Младенцы"]
          ? `${totalItems} ${text}, ${itemCount["Младенцы"]} ${textBaby}`
          : `${totalItems} ${text}`
      }
    },
  });

  $('.js-dropdown__guests').each((i, root) => new Closing(root));

});

$(document).ready(() => {
  const defaultText = 'Выберите кол-во комнат';

  $('.js-dropdown__rooms').iqDropdown({
    maxItems: 9,
    minItems: 0,
    setSelectionText(itemCount, totalItems, items) {
      $('.js-dropdown__rooms').each(
        (i, root) => new ButtonsDD(root, totalItems)
      );

      let text = '';
      if (totalItems == 0) {
        text = defaultText;
        return `${text}`;
      } else {
        for (let key in itemCount) {
          if (itemCount[key] != 0) {
            text += `${itemCount[key]} ${key}, `;
          }
        }
        text = text.slice(0, -2);
        if (text.length > 21) {
          text = text.slice(0, 20) + '...';
        }
        return `${text}`;
      }
    },
  });

  $('.js-dropdown__rooms').each((i, root) => new Closing(root));

});
