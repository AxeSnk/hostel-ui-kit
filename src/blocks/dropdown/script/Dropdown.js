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
    this.totalCounter = 0;
    this.babyesCounter = 0;
    this.menuOpen = false;
    this.selection = this.root.querySelector('.js-dropdown__selection');
    this.menuOptionsList = this.root.querySelectorAll('.js-dropdown__menu-options');
    this.menuOptions = Array.from(this.menuOptionsList).map(item => ({
      item,
      increment: item.querySelector('.js-plus'),
      decrement: item.querySelector('.js-minus'),
      controlCounter: item.querySelector('.js-controls-counter'),
      id: item.dataset.id,
      count: Number(
        item.querySelector('.js-controls-counter').getAttribute('value')
      )
    }));
    this.menuOptions.map(i => {
      this.totalCounter += i.count;

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

    this.clearButton.addEventListener('click', this.clear);
  }
  
  addListeners() {
    for (var i = 0, len = this.incrementList.length; i < len; i++) {
      this.incrementList[i].addEventListener('click', this.plus);
    }
    for (var i = 0, len = this.decrementList.length; i < len; i++) {
      this.decrementList[i].addEventListener('click', this.minus);
    }

    document.addEventListener('click', this.clickRoot);
  }

  clickRoot = (e) => {
    const isDropdown = this.root.contains(e.target);
    const isInput = e.target === this.selection;
    const isApplyButton = e.target === this.applyButton;
    const isIconClose = (e.target === this.icon) && (this.menuOpen === false);
    const isIconOpen = (e.target === this.icon) && (this.menuOpen === true);

    if(isInput || isIconClose) {
      this.showMenu();
    };

    if(!isDropdown || isApplyButton || isIconOpen) {
      this.hide();
      this.upDate();
    };
  }

  showMenu() {
    this.selection.classList.add('dropdown__selection_active');
    this.menu.classList.add('dropdown__menu_active');
    this.icon.classList.add('dropdown__icon_active');
    this.menuOpen = true;
  }

  plus = (e) => {
    const { maxItems } = this.options;
    const maxCount = this.totalCounter >= maxItems;
    if (!maxCount) {
      this.menuOptions.map(i => {
        if (i.item.contains(e.target)) {
          i.count += 1;
          i.controlCounter.setAttribute('value', i.count);
          if (
            'Младенцы' ==
            e.target.closest('.js-dropdown__menu-options').dataset.id
          ) {
            this.babyesCounter += 1;
          }
        }
      });
      this.totalCounter += 1;
    }
  }

  minus = (e) => {
    const { minItems } = this.options;
    const minCount = this.totalCounter <= minItems;
    this.menuOptions.map(i => {
      if (!minCount && i.item.contains(e.target) && i.count > 0) {
        i.count -= 1;
        i.controlCounter.setAttribute('value', i.count);
        if (
          'Младенцы' == e.target.closest('.js-dropdown__menu-options').dataset.id
        ) {
          this.babyesCounter -= 1;
        }
        this.totalCounter -= 1;
      }
    });
  }

  plural() {
    const { items } = this.options;
    const isOneItems = this.totalCounter > 0 && this.totalCounter == 1;
    const isFourItems = this.totalCounter > 1 && this.totalCounter <= 4;

    let text;
    isOneItems && (text = items[1]);
    isFourItems && (text = items[2]);
    this.totalCounter > 4 && (text = items[0]);

    return text;
  }

  pluralBabyes() {
    const { itemsBaby } = this.options;

    const isOneBabyes = this.babyesCounter > 0 && this.babyesCounter == 1;
    const isFourBabyes = this.babyesCounter > 1 && this.babyesCounter <= 4;

    let textBaby = '';
    isOneBabyes && (textBaby = `, ${this.babyesCounter} ${itemsBaby[1]}`);
    isFourBabyes && (textBaby = `, ${this.babyesCounter} ${itemsBaby[2]}`);
    this.babyesCounter > 4 && (textBaby = `, ${this.babyesCounter} ${itemsBaby[0]}`);

    return textBaby;
  }

  numOfLetters(text) {
    if (text.length > 19) {
      text = `${text.slice(0, 20)}...`;
    }
    return text;
  }

  upDate() {
    const { defaultText, maxItems, minItems, type } = this.options;
    let totalText = '';

    if (type == 'guests') {
      const text = this.plural();
      const textBaby = this.pluralBabyes();
      totalText = `${this.totalCounter} ${text}${textBaby}`;
    }

    if (type == 'rooms') {
      this.menuOptions.map(i => {
        i.count > 0 && (totalText = `${totalText}${i.count} ${i.id}, `);
        totalText = this.numOfLetters(totalText);
      });
    }

    this.menuOptions.map(i => {
      i.count <= minItems
        ? i.decrement.classList.add('dropdown__controls-button_disabled')
        : i.decrement.classList.remove('dropdown__controls-button_disabled');
      i.count >= maxItems
        ? i.increment.classList.add('dropdown__controls-button_disabled')
        : i.increment.classList.remove('dropdown__controls-button_disabled');
    });

    this.totalCounter > 0
      ? this.selection.setAttribute('value', `${totalText}`)
      : this.selection.setAttribute('value', `${defaultText}`);

    if (this.clearButton) {
      this.totalCounter > 0
        ? this.clearButton.classList.add('dropdown__button-clear_active')
        : this.clearButton.classList.remove('dropdown__button-clear_active');
    }
  }

  hide() {
    this.menuOpen = false;
    this.selection.classList.remove('dropdown__selection_active');
    this.menu.classList.remove('dropdown__menu_active');
    this.icon.classList.remove('dropdown__icon_active');
  }

  clear = () => {
    const { minItems } = this.options;
    this.menuOptions.map(i => {
      i.count = minItems;
      i.controlCounter.setAttribute('value', i.count);
    });
    this.totalCounter = 0;
    this.babyesCounter = 0;
    this.upDate();
  }
}

export default Dropdown;
