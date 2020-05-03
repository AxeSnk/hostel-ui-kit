import 'air-datepicker';

let $start = $('.js-calendar__start'),
  $end = $('.js-calendar__end');
  
let picker = $start.datepicker({
  range: true,
  multipleDatesSeparator: '-',
  todayButton: true,
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  navTitles: {
    days: 'MM <i>yyyy</i>'
  },
  onSelect: function(fd, d, picker) {
    $start.val(fd.split("-")[0]);
    $end.val(fd.split("-")[1]);
  }
}).data('datepicker');

$end.on('click', () => {
  picker.show();
});

$('.js-calendar__range').datepicker({
  position: 'bottom left',
  multipleDates: true,
  todayButton: true,
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  range: true,
  multipleDatesSeparator: ' - ',
  navTitles: {
    days: 'MM <i>yyyy</i>'
  }
});
