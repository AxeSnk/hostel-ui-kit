import Inputmask from 'inputmask';

var selector = document.getElementsByClassName('js-masked');

var im = new Inputmask('99.99.9999');
im.mask(selector);
