class PhotoSlider {
  constructor(root) {
    this.init(root);
    this.addListeners();
  }

  init(root) {
    this.slider = root;
    this.index = 0;
    this.images = this.slider.querySelectorAll('.js-image-room');
    this.images[this.index].classList.add('image-show')
    this.arrowLeft = this.slider.querySelector('.js-arrow-left');
    this.arrowRight = this.slider.querySelector('.js-arrow-right');
    this.dots = this.slider.querySelectorAll('.js-image-ellipse');
    this.dots[this.index].classList.add('elipse-filled')
  }

  addListeners() {
    const clickSlider = e => {
      e.target == this.arrowLeft || this.arrowLeft.contains(e.target) ? this.movePrev() : null;
      e.target == this.arrowRight || this.arrowRight.contains(e.target) ? this.moveNext() : null;
    };

    this.slider.addEventListener('click', clickSlider);
  }

  movePrev() {
    this.images[this.index].classList.remove('image-show')
    this.dots[this.index].classList.remove('elipse-filled')
    this.index == 0 ? this.index = 3 : this.index -= 1
    this.images[this.index].classList.add('image-show')
    this.dots[this.index].classList.add('elipse-filled')
  }

  moveNext() {
    this.images[this.index].classList.remove('image-show')
    this.dots[this.index].classList.remove('elipse-filled')
    this.index == 3 ? this.index = 0 : this.index += 1
    this.images[this.index].classList.add('image-show')
    this.dots[this.index].classList.add('elipse-filled')
  }
}

export default PhotoSlider;
