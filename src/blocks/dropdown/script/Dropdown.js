class Dropdown {
  constructor(root) {
    this.root = root;
    this.initState();
    this.init();
    this.addListeners();
    this.update();
    this.setSelection();
  }

  initState() {
    this.state = {
      totalCount: '',
      plurals: this.root.dataset.plurals,
      uniqueCounts: [],
      isMenuActive: this.root.dataset.active,
      value: '',
    };
  }

  init() {
    this.selection = this.root.querySelector('.js-dropdown__selection');
    this.menuOptionsList = this.root.querySelectorAll('.js-dropdown__menu-options');
    this.menuOptions = Array.from(this.menuOptionsList).map((item) => ({
      minus: item.querySelector('.js-dropdown__controls-minus'),
      plus: item.querySelector('.js-dropdown__controls-plus'),
      controlCounter: item.querySelector('.js-controls-counter'),
      id: item.dataset.id,
      count: Number(
        item.querySelector('.js-controls-counter').dataset.value,
      ),
      plurals: item.dataset.uniquePlurals,
    }));

    this.menuOptions.forEach((item) => {
      this.state.uniqueCounts.push(item.count);
    });

    this.menu = this.root.querySelector('.js-dropdown__menu');
    this.icon = this.root.querySelector('.js-dropdown__icon');

    this.clearButton = this.root.querySelector('.js-dropdown__button_type_clear');
    this.applyButton = this.root.querySelector('.js-dropdown__button_type_apply');

    this.minusBtnList = this.root.querySelectorAll('.js-dropdown__controls-minus');
    this.plusBtnList = this.root.querySelectorAll('.js-dropdown__controls-plus');
  }

  addListeners() {
    this.menuOptions.forEach((item, i) => {
      const handleMinusClick = () => {
        const isGreaterZero = this.state.uniqueCounts[i] > 0;

        this.state.uniqueCounts[i] -= isGreaterZero && 1;
        this.update();
      };
      const handlePlusClick = () => {
        this.state.uniqueCounts[i] += 1;
        this.update();
      };

      item.minus.addEventListener('click', handleMinusClick);
      item.plus.addEventListener('click', handlePlusClick);
    });

    document.addEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = (e) => {
    const isDropdown = this.root.contains(e.target);
    const isInput = e.target === this.selection;
    const isApplyButton = e.target === this.applyButton;
    const isClearButton = e.target === this.clearButton;
    const isIconClose = (e.target === this.icon) && (this.state.isMenuActive === false);
    const isIconOpen = (e.target === this.icon) && (this.state.isMenuActive === true);

    const isShowDropdown = isInput || isIconClose;
    const isHideDropdown = !isDropdown || isApplyButton || isIconOpen;

    if (isShowDropdown) {
      this.showMenu();
      this.update();
    }

    if (isHideDropdown) {
      this.hide();
      this.update();
      this.setSelection();
    }

    if (isClearButton) {
      this.clearCounts();
      this.update();
    }
  }

  showMenu() {
    this.state.isMenuActive = true;
  }

  hide() {
    this.state.isMenuActive = false;
  }

  update() {
    if (this.state.isMenuActive) {
      this.selection.classList.add('dropdown__selection_active');
      this.menu.classList.add('dropdown__menu_active');
      this.icon.classList.add('dropdown__icon_active');
    } else {
      this.selection.classList.remove('dropdown__selection_active');
      this.menu.classList.remove('dropdown__menu_active');
      this.icon.classList.remove('dropdown__icon_active');
    }

    this.state.totalCount = this.state.uniqueCounts.reduce(
      (sum, currentValue) => sum + currentValue, 0,
    );

    this.menuOptions.forEach((item, i) => {
      item.controlCounter.value = this.state.uniqueCounts[i].toString();

      if (this.state.uniqueCounts[i] === 0) {
        item.minus.classList.add('dropdown__controls-button_disabled');
      } else {
        item.minus.classList.remove('dropdown__controls-button_disabled');
      }

      if (this.state.totalCount === 0 && this.clearButton) {
        this.clearButton.classList.add('dropdown__button_hidden');
      } else if (this.clearButton) {
        this.clearButton.classList.remove('dropdown__button_hidden');
      }
    });
  }

  setSelection() {
    let otherCount = 0;
    let uniqueCount = '';
    let uniqueItemText = '';
    const uniqueArr = [];
    const otherPlurals = JSON.parse(this.state.plurals);

    this.menuOptions.forEach((item, i) => {
      if (item.id === 'null' && this.state.uniqueCounts[i] >= 1) {
        otherCount += this.state.uniqueCounts[i];
      }
      if (item.id === 'unique' && this.state.uniqueCounts[i] >= 1) {
        uniqueCount = `${this.state.uniqueCounts[i]}`;

        const uniquePlurals = JSON.parse(item.plurals);

        uniqueItemText = `${uniqueCount} ${this.formatCount(uniqueCount, uniquePlurals)}`;
        uniqueArr.push(uniqueItemText);
      }
    });

    const otherText = `${otherCount} ${this.formatCount(otherCount, otherPlurals)}`;
    const uniqueText = uniqueArr.join(', ');

    const textValue = () => {
      if (otherCount && uniqueCount) return `${otherText}, ${uniqueText}`;

      if (uniqueCount) return `${uniqueText}`;

      if (otherCount) return `${otherText}`;

      return '';
    };

    this.state.value = textValue();
    this.selection.value = this.state.value;
  }

  formatCount = (count, plurals) => {
    count = Math.abs(count % 100);
    const num = count % 10;

    if (count > 10 && count < 20) return plurals[2];
    if (num > 1 && num < 5) return plurals[1];
    if (num === 1) return plurals[0];
    return plurals[2];
  }

  clearCounts() {
    this.state.uniqueCounts.forEach((item, i) => {
      this.state.uniqueCounts[i] = 0;
    });
  }
}

export default Dropdown;
