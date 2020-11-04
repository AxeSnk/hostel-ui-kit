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

      if (isArrowLeft) {
        this.index = (this.index < 1) ? this.images.length - 1 : this.index - 1;
        this.slideImage();
      }
      if (isArrowRight) {
        this.index = (this.index >= this.images.length - 1) ? 0 : this.index + 1;
        this.slideImage();
      }
    };

    this.slider.addEventListener('click', clickSlider);
  }

  slideImage() {
    this.images[this.index].classList.remove('slider-image__room_show');
    this.dots[this.index].classList.remove('slider-image__ellipses-item_filled');

    this.images.forEach((image, index) => {
      if (this.index === index) {
        image.classList.add('slider-image__room_show');
        this.dots[index].classList.add('slider-image__ellipses-item_filled');
      } else {
        image.classList.remove('slider-image__room_show');
        this.dots[index].classList.remove('slider-image__ellipses-item_filled');
      }
    });
  }
}

export default SliderImage;
