class Burger {
  constructor(root) {
    this.burger = root;
    this.init();
    this.addListeners();
  }

  init() {
    this.menu = this.burger.querySelector('.js-header__menu');
    this.menuNav = this.burger.querySelector('.js-menu__nav');
    this.burgerIcon = this.burger.querySelector('.js-header__burger');
    this.login = this.burger.querySelector('.js-header__login-name');
    this.buttons = this.burger.querySelector('.js-header__buttons');
  }

  addListeners() {
    this.burgerIcon.addEventListener('click', this.openMenu);
    document.addEventListener('click', this.hide);
  }

  openMenu = () => {
    this.burger.classList.add('header__nav_active');
    this.menu.classList.add('header__menu_active');
    this.menuNav.classList.add('menu__nav_active');
    this.burgerIcon.classList.add('header__burger_active');
    if (this.login) {
      this.login.classList.add('header__login-name_active');
    } else {
      this.buttons.classList.add('header__buttons_active');
    }
  }

  hide = (e) => {
    const notBurger = !this.burger.contains(e.target);

    if (notBurger) {
      this.burger.classList.remove('header__nav_active');
      this.menu.classList.remove('header__menu_active');
      this.menuNav.classList.remove('menu__nav_active');
      this.burgerIcon.classList.remove('header__burger_active');
      if (this.login) {
        this.login.classList.remove('header__login-name_active');
      } else {
        this.buttons.classList.remove('header__buttons_active');
      }
    }
  }
}

export default Burger;
