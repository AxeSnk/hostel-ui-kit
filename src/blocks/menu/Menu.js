class Menu {
  constructor(root) {
    this.init(root);
    this.addListenerSubmenu();
  }

  init(root) {
    this.menu = root;
    this.navLink = $(this.menu).find('.js-menu__nav-link');
    this.submenu = $(this.menu).find('.js-menu__submenu');

    document.addEventListener('click', this.hide.bind(this));
    this.navLink.each(this.addListenerSubmenu.bind(this));
  }

  addListenerSubmenu(i, element) {
    $(element).on('click', this.toggleSubmenu.bind(this));
  }

  hide(e) {
    const arrow = $(this.menu).find('.js-menu__nav-arrow');

    if (!this.navLink.is(e.target)) {
      this.submenu.removeClass('menu__submenu_active');
      arrow.removeClass('menu__nav-arrow_expanded');
    }
  }

  toggleSubmenu(e) {
    const submenu = $(e.currentTarget)
      .parent()
      .find('.js-menu__submenu');
    const arrow = $(e.currentTarget).parent().find('.js-menu__nav-arrow');

    submenu.toggleClass('menu__submenu_active');
    arrow.toggleClass('menu__nav-arrow_expanded');
  }
}

export default Menu;
