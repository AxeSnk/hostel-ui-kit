import 'air-datepicker';


  $('.js-calendar').datepicker({
    position: 'bottom left',
    multipleDates: false,
    todayButton: true,
    clearButton: true,
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>',
    range: false,
    multipleDatesSeparator: ' - ',
    navTitles: {
      days: 'MM <i>yyyy</i>'
    }
  });

  // today: 'Применить',
  // clear: 'Очистить',
  // dateFormat: 'dd.mm.yyyy',
  // timeFormat: 'hh:ii',
  // firstDay: 1
