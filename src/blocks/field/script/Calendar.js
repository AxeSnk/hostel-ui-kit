/* eslint-disable */

import 'air-datepicker';
import options from './options';

class Calendar {
  constructor(root) {
    this.root = root;
    this.init();
    this.addButton();
  }

  init() {
    this.start = this.root.querySelector('.js-calendar-start');
    this.end = this.root.querySelector('.js-calendar-end');
    this.range = this.root.querySelector('.js-calendar-range');

    if (this.start && this.end) {
      this.picker = $(this.start)
        .datepicker({
          ...options,
          onSelect: this.onDateSelect,
        })
        .data('datepicker');

      $(this.end).on('click', () => {
        this.picker.show();
      });
    } else {
      this.picker = $(this.range)
        .datepicker({ ...options })
        .data('datepicker');
    }

    this.buttons = this.picker.$datepicker
      .get(0)
      .querySelector('.datepicker--buttons');
  }

  onDateSelect = () => {
    let [startDate, endDate] = this.start.value.split(
      options.multipleDatesSeparator,
    );
    if (startDate === undefined) startDate = '';
    if (endDate === undefined) endDate = '';
    this.start.value = startDate;
    if (this.end) {
      this.end.value = endDate;
    }
  }

  addButton() {
    const applyButton = document.createElement('span');
    applyButton.innerHTML = 'Применить';
    applyButton.classList.add('datepicker__button-apply');
    this.buttons.prepend(applyButton);
    applyButton.addEventListener('click', this.hidePicker);
  }

  hidePicker = () => {
    this.picker.hide();
  }
}

export default Calendar;
