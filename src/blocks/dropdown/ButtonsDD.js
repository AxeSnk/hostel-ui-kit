class ButtonsDD {
  constructor(clearButton, totalItems) {
    this.clearButton = clearButton;
    this.addListener();
    this.render(totalItems);
  }

  addListener() {
    this.clearButton.on('click', this.setSelectionText.bind(this));
  }

  render(totalItems) {
    if (totalItems > 0) {
      this.clearButton.addClass('button__dropdown--clear-active');
    } else {
      this.clearButton.removeClass('button__dropdown--clear-active');
    }
  }

  setSelectionText(totalItems) {
    totalItems = 0;
    return totalItems;
  }
}

export default ButtonsDD;
