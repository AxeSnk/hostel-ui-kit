import Inputmask from 'inputmask';

$(document).ready(() => {
  let selector = document.getElementsByClassName("js-masked");
  let im = new Inputmask("99.99.9999");
  im.mask(selector);
});

