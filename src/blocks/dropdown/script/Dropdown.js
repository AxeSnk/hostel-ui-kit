// import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';
// import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css';
import ButtonsDD from './ButtonsDD.js';
import defaultOptions from './defaultOptions';

class Dropdown {
  constructor(root, options = {}) {
    this.options = { ...defaultOptions, ...options };
    this.root = root;
    this.init();
    this.addListeners();
  }

  init() {
    const { defaultText, maxItems, minItems } = this.options;

    this.totalItems = 0;
    this.baby = 0;
    this.input = this.root.querySelector('.js-iqdropdown-selection');
    this.items = this.root.querySelectorAll('.js-iqdropdown-menu-option');
    this.item = Array.from(this.items).map(item => ({
      item,
      increment: item.querySelector('.js-plus'),
      decrement: item.querySelector('.js-minus'),
      countInput: item.querySelector('.js-controls__count'),
      count: Number(
        item.querySelector('.js-controls__count').getAttribute('value')
      )
    }));
    this.item.map(i => {
      i.count <= minItems ? i.decrement.classList.add('disabled') : i.decrement.classList.remove('disabled')
      i.count >= maxItems ? i.increment.classList.add('disabled') : i.increment.classList.remove('disabled')
    })

    this.clearButton = this.root.querySelector('.js-button__dropdown--clear');
    this.applyButton = this.root.querySelector('.js-button__dropdown--apply');
    this.menu = this.root.querySelector('.js-iqdropdown-menu');
    this.icon = this.root.querySelector('.js-iqdropdown-icon');

    this.incrementList = this.root.querySelectorAll('.js-plus');
    this.decrementList = this.root.querySelectorAll('.js-minus');
  }

  addListeners() {
    this.root.addEventListener('click', this.showMenu.bind(this));
    this.applyButton.addEventListener('click', this.hide.bind(this));
    this.clearButton.addEventListener('click', this.clear.bind(this));
    for (var i = 0, len = this.incrementList.length; i < len; i++) {
      this.incrementList[i].addEventListener('click', this.plus.bind(this));
    }
    for (var i = 0, len = this.decrementList.length; i < len; i++) {
      this.decrementList[i].addEventListener('click', this.minus.bind(this));
    }

    document.addEventListener('click', this.hide.bind(this));
  }

  showMenu() {
    this.root.classList.add('active');
    this.icon.classList.add('icon-active');
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
            e.target.closest('.js-iqdropdown-menu-option').dataset.id
          ) {
            this.baby += 1;
          }
        }
      });
      this.totalItems += 1;
      this.upDate();
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
          'Младенцы' ==
          e.target.closest('.js-iqdropdown-menu-option').dataset.id
        ) {
          this.baby -= 1;
        }
        this.totalItems -= 1;
        this.upDate();
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

  upDate() {
    const { defaultText, maxItems, minItems } = this.options;
    const text = this.plural();
    const textBaby = this.pluralBabyes();

    this.item.map(i => {
      i.count <= minItems ? i.decrement.classList.add('disabled') : i.decrement.classList.remove('disabled')
      i.count >= maxItems ? i.increment.classList.add('disabled') : i.increment.classList.remove('disabled')
    })

    this.totalItems > 0
      ? (this.input.innerHTML = this.totalItems + ' ' + text + textBaby)
      : (this.input.innerHTML = defaultText);
    this.totalItems > 0
      ? this.clearButton.classList.add('active')
      : this.clearButton.classList.remove('active');
  }

  hide(e) {
    const notDropdown = !this.root.contains(e.target);
    const isApplyButton = e.target == this.applyButton;
    if (notDropdown || isApplyButton) {
      this.root.classList.remove('active');
      this.icon.classList.remove('icon-active');
    }
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
