class ButtonsDD {
  constructor(totalItems) {
    this.clearButton = $('.button__dropdown--clear');
    this.render(totalItems);
  }

  render(totalItems) {
    if (totalItems > 0) {
      this.clearButton.attr('style', 'display: block');
    } else {
      this.clearButton.attr('style', 'display: none');
    }
  }
}

export default ButtonsDD;
