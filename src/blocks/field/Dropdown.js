class Dropdown {
  constructor() {
    let fields = document.getElementsByClassName('js-dropdown__guests');
    let icon = document.createElement('i');
    icon.setAttribute('class', 'far angle-down')
    fields[0].append(icon);
  }
}

export default Dropdown;
