class Menu {
  constructor(root) {
    this.init(root);
    this.addListenerBurger();
    this.addListenerSubmenu();
  }

  init(root) {
    this.menu = root;
    this.burger = $(this.menu).find('.js-burger-menu');
    this.nav = $(this.menu).find('.js-nav-menu');
    this.navLinks = $(this.menu).find('.js-nav-menu__item');
    this.menuMore = $(this.menu).find('.js-menu-more');
    this.submenu = $(this.menu).find('.js-nav-menu__submenu');
    this.arrow = $(this.menu).find('.expand-more__icon');

    document.addEventListener('click', this.hide.bind(this));
    this.burger.each(this.addListenerBurger.bind(this));
    this.menuMore.each(this.addListenerSubmenu.bind(this));
  }

  addListenerBurger(i, element) {
    $(element).on('click', this.toggleOn.bind(this));
  }

  addListenerSubmenu(i, element) {
    $(element).on('click', this.toggleSubmenu.bind(this));
  }

  hide(e) {
    if (!this.burger.is(e.target) && !this.menuMore.is(e.target)) {
      this.nav.removeClass('menu-active');
      this.burger.removeClass('toggle');
      this.submenu.removeClass('submenu-active');
      this.arrow.removeClass('more-active');
    }
  }

  toggleOn() {
    this.nav.toggleClass('menu-active');
    this.navLinks.each((index, link) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade ease forwards ${index / 5 + 0.3}s`;
      }
    });
    this.burger.toggleClass('toggle');
  }

  toggleSubmenu(e) {
    const submenu = $(e.currentTarget)
      .parent()
      .find('.js-nav-menu__submenu');
    const arrow = $(e.currentTarget).find('.expand-more__icon');

    submenu.toggleClass('submenu-active');
    arrow.toggleClass('more-active');
  }
}

export default Menu;
