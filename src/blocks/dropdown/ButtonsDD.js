class ButtonsDD {
  constructor(root, totalItems) {
    this.init(root);
    this.addListener();
    this.render(totalItems);
  }

  init(root) {
    this.droprdown = root;
    this.clearButton = $(this.droprdown).find('.js-button__dropdown--clear');
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
