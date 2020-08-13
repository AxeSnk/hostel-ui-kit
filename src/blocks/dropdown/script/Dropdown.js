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
    this.totalItems = 0;
    this.input = this.root.querySelector('.js-iqdropdown-selection');
    this.clearButton = this.root.querySelector('.js-button__dropdown--clear');
    this.applyButton = this.root.querySelector('.js-button__dropdown--apply');
    this.menu = this.root.querySelector('.js-iqdropdown-menu');
    this.icon = this.root.querySelector('.js-iqdropdown-icon')

    this.incrementList = this.root.querySelectorAll('.js-plus');
    this.decrementList = this.root.querySelectorAll('.js-minus');
  }

  addListeners() {
    this.root.addEventListener('click', this.showMenu.bind(this));
    this.icon.addEventListener('click', (e) => {
      if(e.target == this.icon) {
        this.root.classList.remove('active');
        console.log('icon')
      }

    })
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
    this.icon.classList.add('icon-active')
  }

  plus() {
    const { maxItems } = this.options;
    const maxCount = this.totalItems >= maxItems;
    if (!maxCount) {
      this.totalItems += 1;
      this.upDate();
    }
  }

  minus() {
    const { minItems } = this.options;
    const minCount = this.totalItems <= minItems;
    if (!minCount) {
      this.totalItems -= 1;
      this.upDate();
    }
  }

  upDate() {
    this.input.innerHTML = this.totalItems;
    this.totalItems > 0 ? this.clearButton.classList.add('active') : this.clearButton.classList.remove('active');
  }

  hide(e) {
    const notDropdown = !this.root.contains(e.target);
    const isApplyButton = e.target == this.applyButton;
    if (notDropdown || isApplyButton) {
      this.root.classList.remove('active');
      this.icon.classList.remove('icon-active')
    }
  }

  clear() {
    this.totalItems = 0;
    this.upDate();
  }
}

export default Dropdown;
