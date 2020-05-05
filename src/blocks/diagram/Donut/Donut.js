import { createElement, createElementNS } from './createElements';
import createGradient from './createGradient';

class Donut {
  constructor(root, config) {
    this.root = root;
    this.config = config;
    this.createWrap();
    this.createDonut();
    this.createSectors();
  }

  createWrap() {
    this.figure = createElement('figure', { class: 'diagram__figure' });
    this.wrap = createElement('div', { class: 'diagram__figure' });
    this.figure.appendChild(this.wrap);
    this.root.appendChild(this.figure);
  }

  createDonut() {
    const { size, sectors } = this.config;

    this.donut = createElementNS('svg', {
      class: 'donut',
      width: `${size}px`,
      height: `${size}px`,
      viewBox: `0 0 42 42`
    });

    let hole = createElementNS('circle', {
      class: 'donut-hole',
      cx: '21',
      cy: '21',
      r: '15.91549430918954',
      fill: '#fff'
    });

    let ring = createElementNS('circle', {
      class: 'donut-ring',
      cx: '21',
      cy: '21',
      r: '15.91549430918954',
      fill: 'transparent',
      stroke: '#d2d3d4',
      strokeWidth: '3'
    });

    this.donut.appendChild(hole);
    this.donut.appendChild(ring);
    this.wrap.appendChild(this.donut);
  }

  createSectors() {
    const { size, sectors } = this.config;

    sectors.forEach(item => {
      let { color, value } = item;

      if (item.color) {
        color = item.color;
      } else {
        color = `url(#${item.gradient.name})`;
        let gradient = createGradient(item.gradient)
        this.donut.appendChild(gradient)
      }

      let sector = createElementNS('circle', {
        class: 'donut-segment',
        cx: '21',
        cy: '21',
        r: '15.91549430918954',
        fill: 'transparent',
        stroke: `${color}`,
        strokeWidth: '3',
        strokeDasharray: `${value} 80`,
        strokeDashoffset: '25'
      });

      this.donut.appendChild(sector);
    });
  }
}

export default Donut;
