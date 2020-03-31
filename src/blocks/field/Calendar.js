import 'air-datepicker';


  $('.js-calendar__').datepicker({
    position: 'bottom left',
    // multipleDates: false,
    todayButton: true,
    clearButton: true,
    prevHtml: '<i class="material-icons">arrow_back</i>',
    nextHtml: '<i class="material-icons">arrow_forward</i>',
    // range: false,
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

