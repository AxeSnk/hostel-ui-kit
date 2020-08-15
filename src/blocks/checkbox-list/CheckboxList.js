class CheckboxList {
  constructor(root) {
    this.root = root;
    this.init();
    this.addListener();
  }

  init() {
    this.checkboxList = $(this.root).find('.js-checkbox-list__header');
    this.menu = $(this.root).find('.js-checkbox-list__menu');
    this.icon = $(this.root).find('.js-checkbox-list__icon');
  }

  addListener() {
    this.checkboxList.on('click', this.onClick.bind(this));
  }

  onClick() {
    this.menu.toggleClass('checkbox-list__menu--open');
    this.icon.toggleClass('expand-more__icon--open');
  }
}

export default CheckboxList;