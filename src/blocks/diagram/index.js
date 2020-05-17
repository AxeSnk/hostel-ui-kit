import Donut from './Donut/Donut';
import config from './config';

$(document).ready(() => {
  $('.js-diagram').each((i, root) => new Donut(root, config));
});
