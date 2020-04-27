class Closing {
  constructor(root) {
    this.init(root);
    this.addListener();
  }

  init(root) {
    this.dropdown = root; 
  }

  addListener() {
    document.addEventListener('click', this.hide.bind(this));
  }

  hide(e) {
    if (!this.dropdown.contains(e.target)) {
      this.dropdown.classList.remove('menu-open')
    }
  }
}

export default Closing;
