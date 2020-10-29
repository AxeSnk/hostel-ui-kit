class CheckboxList {
  constructor(root) {
    this.root = root;
    this.init();
    this.addListener();
  }

  init() {
    this.checkboxList = this.root.querySelector('.js-checkbox-list__header');
    this.menu = this.root.querySelector('.js-checkbox-list__menu');
    this.icon = this.root.querySelector('.js-checkbox-list__icon');
  }

  addListener() {
    this.checkboxList.addEventListener('click', this.onClick);
  }

  onClick = () => {
    this.menu.classList.toggle('checkbox-list__menu_isOpened');
    this.icon.classList.toggle('checkbox-list__expand-icon_active');
  }
}

export default CheckboxList;
