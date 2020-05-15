class Closing {
  constructor(root) {
    this.root = root
    this.addListener();
  }

  addListener() {
    document.addEventListener('click', this.hide.bind(this));
  }

  hide(e) {
    if (!this.root.contains(e.target)) {
      this.root.classList.remove('menu-open')
    }
  }
}

export default Closing;
