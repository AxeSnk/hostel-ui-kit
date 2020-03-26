require('jquery-ui-dist/jquery-ui.js');

$(function() {
  $('.js-slider').slider({
    min: 0,
    max: 15000,
    values: [5000, 10000],
    range: true,
    slide: function(event, ui) {
      $('.slider__amount').val(ui.values[0] + '\u20bd - ' + ui.values[1] + '\u20bd');
    }
  });
  $('.slider__amount').val(
    $('.js-slider').slider('values', 0) +
      '\u20bd - ' +
      $('.js-slider').slider('values', 1) +
      '\u20bd'
  );
});
