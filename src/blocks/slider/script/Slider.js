import 'jquery-ui-slider/jquery-ui';

class Slider {
  constructor() {
    this.init();
  }

  init() {
    const $element = $('.js-container');
    const $val = $('.js-slider__val');

    $element.slider({
      min: 0,
      max: 15000,
      values: [5000, 10000],
      range: true,
      slide: function(event, ui) {
        $val.val(`${ui.values[0]}₽ - ${ui.values[1]}₽`)
      },
    });
    $val.val(`${$element.slider('values', 0)}₽ - ${$element.slider('values', 1)}₽`);
  }

}

export default Slider;

