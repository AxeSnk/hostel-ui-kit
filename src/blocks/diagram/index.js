import Donut from './Donut/Donut';
import config from './config';

document.querySelectorAll('.js-diagram').forEach((root) => new Donut(root, config));
