import createGradient from './createGradient';
import { createElementNS } from './createElements';
import createAnimate from './createAnimate';
import getSectorPath from './getSectorPath';

class Sectors {
  constructor(root, config) {
    this.root = root;
    this.config = config;
    this.createSectors();
  }

  createSectors() {
    const { total, sectors } = this.config;

    let startAngle = 0;
    let endAngle = 0;

    sectors.forEach(item => {
      const { title, color, value, gradient } = item;
      let stroke;
      let angle = value !== 0 ? (value * 360) / total : 0;
      endAngle += angle;

      if (color) {
        stroke = color;
      } else {
        stroke = `url(#${gradient.name})`;
        let gradientSvg = createGradient(gradient);
        this.root.appendChild(gradientSvg);
      }

      const d = getSectorPath(18, 18, 32, startAngle, endAngle);
      const d2 = getSectorPath(18, 18, 32 - 2, startAngle, endAngle);

      const sector = createElementNS('path', {
        class: 'diagram__sector',
        d,
        fill: 'none',
        stroke,
        'data-title': title,
        'data-name': gradient.name,
        'data-value': value,
        'stroke-width': value !== 0 ? '1' : '0'
      });

      startAngle += angle;

      const animateWidthOver = createAnimate('stroke-width', 1, 3, 'mouseover');
      const animateWidthOut = createAnimate('stroke-width', 3, 1, 'mouseout');
      const animateDOver = createAnimate('d', d, d2, 'mouseover');
      const animateDOut = createAnimate('d', d2, d, 'mouseout');

      sector.appendChild(animateWidthOver);
      sector.appendChild(animateWidthOut);
      sector.appendChild(animateDOver);
      sector.appendChild(animateDOut);
      this.root.appendChild(sector);
    });
  }
}

export default Sectors;
