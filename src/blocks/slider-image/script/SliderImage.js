class SliderImage {
  constructor(root) {
    this.init(root);
    this.addListeners();
  }

  init(root) {
    this.slider = root;
    this.index = 0;
    this.images = this.slider.querySelectorAll('.js-slider-image__room');
    this.images[this.index].classList.add('slider-image__room_show');
    this.arrowLeft = this.slider.querySelector('.js-slider-image__arrow_prev');
    this.arrowRight = this.slider.querySelector('.js-slider-image__arrow_next');
    this.dots = this.slider.querySelectorAll('.js-slider-image__ellipses-item');
    this.dots[this.index].classList.add('slider-image__ellipses-item_filled');
  }

  addListeners() {
    const clickSlider = (e) => {
      const isArrowLeft = e.target === this.arrowLeft || this.arrowLeft.contains(e.target);
      const isArrowRight = e.target === this.arrowRight || this.arrowRight.contains(e.target);

      if (isArrowLeft) this.movePrev();
      if (isArrowRight) this.moveNext();
    };

    this.slider.addEventListener('click', clickSlider);
  }

  movePrev() {
    this.images[this.index].classList.remove('slider-image__room_show');
    this.dots[this.index].classList.remove('slider-image__ellipses-item_filled');
    if (this.index === 0) {
      this.index = 3;
    } else {
      this.index -= 1;
    }
    this.images[this.index].classList.add('slider-image__room_show');
    this.dots[this.index].classList.add('slider-image__ellipses-item_filled');
  }

  moveNext() {
    this.images[this.index].classList.remove('slider-image__room_show');
    this.dots[this.index].classList.remove('slider-image__ellipses-item_filled');
    if (this.index === 3) {
      this.index = 0;
    } else {
      this.index += 1;
    }
    this.images[this.index].classList.add('slider-image__room_show');
    this.dots[this.index].classList.add('slider-image__ellipses-item_filled');
  }
}

export default SliderImage;
