class Menu {
  constructor() {
    this.init();
    this.addListener();
  }

  init() {
    this.burger = document.querySelector('.js-burger-menu');
    this.nav = document.querySelector('.js-nav-menu');
    this.navLinks = document.querySelectorAll('.js-nav-menu__item');
  }

  addListener() {
    if(this.burger) {
      this.burger.addEventListener('click', this.toggleOn.bind(this));
    }
  }

  toggleOn() {
    this.nav.classList.toggle('menu-active');
    this.navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade ease forwards ${index / 5 + 0.3}s`;
      }
    });
    this.burger.classList.toggle('toggle');
  }
}

export default Menu;
