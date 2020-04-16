import 'air-datepicker';

$('.js-calendar__right').datepicker({
  position: 'bottom right',
  todayButton: true,
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  multipleDatesSeparator: ' - ',
  navTitles: {
    days: 'MM <i>yyyy</i>'
  },
});

$('.js-calendar__left').datepicker({
  position: 'bottom left',
  todayButton: true,
  clearButton: true,
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  multipleDatesSeparator: ' - ',
  navTitles: {
    days: 'MM <i>yyyy</i>'
  },
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
  },
});  

