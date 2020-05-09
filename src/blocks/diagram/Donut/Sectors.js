import createGradient from './createGradient';
import { createElementNS } from './createElements';

class Sectors {
  constructor(root, config) {
    this.root = root;
    this.config = config;
    this.createSectors();
  }

  createSectors() {
    const { size, total, sectors } = this.config;

    let dashoffset = 25;

    sectors.forEach(item => {
      const { name, color, value, gradient } = item;
      let stroke;
      let percent = value * 100 / total;

      if (color) {
        stroke = color;
      } else {
        stroke = `url(#${name})`;
        let gradientSvg = createGradient(gradient, name);
        this.root.appendChild(gradientSvg);
      }

      dashoffset += percent;

      const sector = createElementNS('circle', {
        class: 'donut__sector',
        cx: '22',
        cy: '22',
        r: '15.91549430918954',
        fill: 'transparent',
        stroke: `${stroke}`,
        'stroke-width': '3',
        'stroke-dasharray': `${percent} ${100 - percent}`,
        'stroke-dashoffset': `${dashoffset}`
      });

      this.root.appendChild(sector);
    });
  }
}

export default Sectors;
