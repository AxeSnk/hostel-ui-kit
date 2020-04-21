class ButtonsDD {
  constructor(totalItems) {
    this.init();
    this.addListener();
    this.render(totalItems);
  }

  init() {
    this.clearButton = $('.js-button__dropdown--clear');
  }

  addListener() {
    this.clearButton.on('click', this.setSelectionText.bind(this));
  }

  render(totalItems) {
    if (totalItems > 0) {
      this.clearButton.attr('style', 'display: block');
    } else {
      this.clearButton.attr('style', 'display: none');
    }
  }

  setSelectionText(totalItems) {
    totalItems = 0;
    return totalItems;
  }
}

export default ButtonsDD;
