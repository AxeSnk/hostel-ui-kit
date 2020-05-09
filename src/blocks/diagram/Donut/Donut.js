import { createElement, createElementNS } from './createElements';
import createGradient from './createGradient';
import Legend from './Legend';
import Sectors from './Sectors';

class Donut {
  constructor(root, config) {
    this.root = root;
    this.config = config;
    this.createWrap();
    this.createDonut();
    this.sectors = new Sectors(this.donut, config);
    this.legend = new Legend(this.figure, config);
  }

  createWrap() {
    this.figure = createElement('figure', { class: 'diagram__figure' });
    this.wrap = createElement('div', { class: 'diagram__figure-wrap' });
    this.figure.appendChild(this.wrap);
    this.root.appendChild(this.figure);
  }

  createDonut() {
    const { size, sectors } = this.config;

    this.donut = createElementNS('svg', {
      class: 'donut',
      width: `${size}%`,
      height: `${size}%`,
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
      stroke: '#fff',
      'stroke-width': '3'
    });

    this.donut.appendChild(hole);
    this.donut.appendChild(ring);
    this.wrap.appendChild(this.donut);
  }

}

export default Donut;
