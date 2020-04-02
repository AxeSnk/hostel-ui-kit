class CheckboxList {
  constructor() {
    this.checkboxList = $('.checkbox-list__header');
    this.checkboxList.on('click', this.onClick.bind(this));
  }

  onClick(e) {
    $(e.currentTarget).next()[0].classList.toggle('checkbox-list__menu--open');
  }
}

new CheckboxList();
