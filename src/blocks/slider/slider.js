import 'jquery-ui-dist/jquery-ui.js';

class Slider {
  constructor() {
    this.init();
  }

  init() {
    let $element = $('.js-slider');
    let $val = $('.slider__val');

    $element.slider({
      min: 0,
      max: 15000,
      values: [5000, 10000],
      range: true,
      slide: function(event, ui) {
        $val.val(ui.values[0] + '\u20bd - ' + ui.values[1] + '\u20bd')
      },
    });
    $val.val($element.slider('values', 0) + '\u20bd - ' + $element.slider('values', 1) + '\u20bd');
  }

}

export default Slider;

