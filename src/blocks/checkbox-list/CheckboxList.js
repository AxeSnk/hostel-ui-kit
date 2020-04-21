class CheckboxList {
  constructor() {
    this.init();
    this.addListener();
  }

  init() {
    this.checkboxList = $('.js-checkbox-list__header');
    this.icon = $('.js-checkbox-list__header .expand-more__icon')
  }

  addListener() {
    this.checkboxList.on('click', this.onClick.bind(this));
  }

  onClick(e) {
    $(e.currentTarget).next()[0].classList.toggle('checkbox-list__menu--open');
    this.icon[0].classList.toggle('expand-more__icon--open')
  }
}

new CheckboxList();
