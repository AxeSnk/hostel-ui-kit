class CheckboxList {
  constructor(root) {
    this.root = root;
    this.init();
    this.addListener();
  }

  init() {
    this.$checkboxList = $(this.root).find('.js-checkbox-list__header');
    this.$menu = $(this.root).find('.js-checkbox-list__menu');
    this.$icon = $(this.root).find('.js-checkbox-list__icon');
  }

  addListener() {
    this.$checkboxList.on('click', this.onClick);
  }

  onClick = () => {
    this.$menu.toggleClass('checkbox-list__menu_isOpened');
    this.$icon.toggleClass('checkbox-list__expand-icon_active');
  }
}

export default CheckboxList;
