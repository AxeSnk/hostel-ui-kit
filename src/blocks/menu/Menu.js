class Menu {
  constructor() {
    this.burger = document.querySelector('.burger-menu');
    this.nav = document.querySelector('.nav-menu');
    this.navLinks = document.querySelectorAll('.nav-menu__item');

    this.burger.addEventListener('click', this.toggleOn.bind(this));
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

new Menu();
