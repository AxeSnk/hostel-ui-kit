$('.expandable-checkbox-list__menu').click(function() {
  $(this)
    .closest('.expandable-checkbox-list')
    .find('.expandable-checkbox-list__submenu')
    .stop(true, false)
    .fadeToggle(200);
});
