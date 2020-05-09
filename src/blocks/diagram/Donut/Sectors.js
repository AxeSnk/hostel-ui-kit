import createGradient from "./createGradient";
import { createElementNS } from "./createElements";

class Sectors {
  constructor(root, config) {
    this.root = root;
    this.config = config;
    this.createSectors();
  }

  createSectors() {
    const { size, sectors } = this.config;

    let count = 0;

    sectors.forEach(item => {
      let { name, color, value, gradient } = item;
      let stroke

      if (color) {
        stroke = color;
      } else {
        stroke = `url(#${name})`;
        let gradientSvg = createGradient(gradient, name);
        this.root.appendChild(gradientSvg);
      }

      let sector = createElementNS('circle', {
        class: 'donut-segment',
        cx: '22',
        cy: '22',
        r: '15.91549430918954',
        fill: 'transparent',
        stroke: `${stroke}`,
        'stroke-width': '3',
        'stroke-dasharray': `${value} ${100 - value}`,
        'stroke-dashoffset': `${100 - count + 25}`
      });

      count += value;

      this.root.appendChild(sector);
    });
  }
}

export default Sectors;
