import defaultOptions from './defaultOptions';

class Dropdown {
  constructor(root, options) {
    this.options = { ...defaultOptions, ...options };
    this.root = root;
    this.init();
    this.addListeners();
  }

  init() {
    const { maxItems, minItems, buttons } = this.options;
    this.totalItems = 0;
    this.baby = 0;
    this.open = false;
    this.input = this.root.querySelector('.js-dropdown__selection');
    this.items = this.root.querySelectorAll('.js-dropdown__menu-option');
    this.item = Array.from(this.items).map(item => ({
      item,
      increment: item.querySelector('.js-plus'),
      decrement: item.querySelector('.js-minus'),
      countInput: item.querySelector('.js-controls-count'),
      id: item.dataset.id,
      count: Number(
        item.querySelector('.js-controls-count').getAttribute('value')
      )
    }));
    this.item.map(i => {
      this.totalItems += i.count;

      i.count <= minItems
        ? i.decrement.classList.add('dropdown__controls-button_disabled')
        : i.decrement.classList.remove('dropdown__controls-button_disabled');
      i.count >= maxItems
        ? i.increment.classList.add('dropdown__controls-button_disabled')
        : i.increment.classList.remove('dropdown__controls-button_disabled');
    });

    this.menu = this.root.querySelector('.js-dropdown__menu');
    this.icon = this.root.querySelector('.js-dropdown__icon');

    buttons ? this.addButtons() : null;

    this.incrementList = this.root.querySelectorAll('.js-plus');
    this.decrementList = this.root.querySelectorAll('.js-minus');

    this.upDate();
  }

  addButtons() {
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('dropdown__buttons');

    const clearButton = document.createElement('button');
    clearButton.classList.add(
      'dropdown__button',
      'dropdown__button-clear',
      'js-dropdown__button-clear'
    );
    clearButton.setAttribute('type', 'button');
    clearButton.innerHTML = 'Очистить';

    const applyButton = document.createElement('button');
    applyButton.classList.add(
      'dropdown__button',
      'dropdown__button-apply',
      'js-dropdown__button-apply'
    );
    applyButton.setAttribute('type', 'button');
    applyButton.innerHTML = 'Применить';

    btnWrapper.appendChild(clearButton);
    btnWrapper.appendChild(applyButton);
    this.menu.appendChild(btnWrapper);

    this.clearButton = this.root.querySelector('.js-dropdown__button-clear');
    this.applyButton = this.root.querySelector('.js-dropdown__button-apply');

    this.clearButton.addEventListener('click', this.clear.bind(this));
  }

  addListeners() {
    for (var i = 0, len = this.incrementList.length; i < len; i++) {
      this.incrementList[i].addEventListener('click', this.plus.bind(this));
    }
    for (var i = 0, len = this.decrementList.length; i < len; i++) {
      this.decrementList[i].addEventListener('click', this.minus.bind(this));
    }

    document.addEventListener('click', this.clickRoot.bind(this));
  }

  clickRoot(e) {
    const notDropdown = !this.root.contains(e.target);
    const isInput = e.target == this.input;
    const isApplyButton = e.target == this.applyButton;
    const isIconClose = (e.target == this.icon) && (this.open == false);
    const isIconOpen = (e.target == this.icon) && (this.open == true);

    if(isInput || isIconClose) {
      this.showMenu();
    };

    if(notDropdown || isApplyButton || isIconOpen) {
      this.hide();
      this.upDate();
    };
  }

  showMenu() {
    this.input.classList.add('dropdown__selection_active');
    this.menu.classList.add('dropdown__menu_active');
    this.icon.classList.add('dropdown__icon_active');
    this.open = true;
  }

  plus(e) {
    const { maxItems } = this.options;
    const maxCount = this.totalItems >= maxItems;
    if (!maxCount) {
      this.item.map(i => {
        if (i.item.contains(e.target)) {
          i.count += 1;
          i.countInput.setAttribute('value', i.count);
          if (
            'Младенцы' ==
            e.target.closest('.js-dropdown__menu-option').dataset.id
          ) {
            this.baby += 1;
          }
        }
      });
      this.totalItems += 1;
    }
  }

  minus(e) {
    const { minItems } = this.options;
    const minCount = this.totalItems <= minItems;
    this.item.map(i => {
      if (!minCount && i.item.contains(e.target) && i.count > 0) {
        i.count -= 1;
        i.countInput.setAttribute('value', i.count);
        if (
          'Младенцы' == e.target.closest('.js-dropdown__menu-option').dataset.id
        ) {
          this.baby -= 1;
        }
        this.totalItems -= 1;
      }
    });
  }

  plural() {
    const { items } = this.options;
    const isOneItems = this.totalItems > 0 && this.totalItems == 1;
    const isFourItems = this.totalItems > 1 && this.totalItems <= 4;

    let text;
    isOneItems ? (text = items[1]) : null;
    isFourItems ? (text = items[2]) : null;
    this.totalItems > 4 ? (text = items[0]) : null;

    return text;
  }

  pluralBabyes() {
    const { itemsBaby } = this.options;

    const isOneBabyes = this.baby > 0 && this.baby == 1;
    const isFourBabyes = this.baby > 1 && this.baby <= 4;

    let textBaby = '';
    isOneBabyes ? (textBaby = ', ' + this.baby + ' ' + itemsBaby[1]) : '';
    isFourBabyes ? (textBaby = ', ' + this.baby + ' ' + itemsBaby[2]) : '';
    this.baby > 4 ? (textBaby = ', ' + this.baby + ' ' + itemsBaby[0]) : '';

    return textBaby;
  }

  numOfLetters(text) {
    if (text.length > 19) {
      text = text.slice(0, 20) + '...';
    }
    return text;
  }

  upDate() {
    const { defaultText, maxItems, minItems, type } = this.options;
    let totalText = '';

    if (type == 'guests') {
      const text = this.plural();
      const textBaby = this.pluralBabyes();
      totalText = this.totalItems + ' ' + text + textBaby;
    }

    if (type == 'rooms') {
      this.item.map(i => {
        i.count > 0 ? (totalText += i.count + ' ' + i.id + ', ') : null;
        totalText = this.numOfLetters(totalText);
      });
    }

    this.item.map(i => {
      i.count <= minItems
        ? i.decrement.classList.add('dropdown__controls-button_disabled')
        : i.decrement.classList.remove('dropdown__controls-button_disabled');
      i.count >= maxItems
        ? i.increment.classList.add('dropdown__controls-button_disabled')
        : i.increment.classList.remove('dropdown__controls-button_disabled');
    });

    this.totalItems > 0
      ? this.input.setAttribute('value', `${totalText}`)
      : this.input.setAttribute('value', `${defaultText}`);

    if (this.clearButton) {
      this.totalItems > 0
        ? this.clearButton.classList.add('dropdown__button-clear_active')
        : this.clearButton.classList.remove('dropdown__button-clear_active');
    }
  }

  hide() {
    this.open = false;
    this.input.classList.remove('dropdown__selection_active');
    this.menu.classList.remove('dropdown__menu_active');
    this.icon.classList.remove('dropdown__icon_active');
  }

  clear() {
    const { minItems } = this.options;
    this.item.map(i => {
      i.count = minItems;
      i.countInput.setAttribute('value', i.count);
    });
    this.totalItems = 0;
    this.baby = 0;
    this.upDate();
  }
}

export default Dropdown;
