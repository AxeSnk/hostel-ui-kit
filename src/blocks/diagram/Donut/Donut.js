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
    const { size, total, labels, sectors } = this.config;

    this.donut = createElementNS('svg', {
      class: 'donut',
      width: `${size}%`,
      height: `${size}%`,
      viewBox: `0 0 42 42`
    });

    const label = createElementNS('g', {
      class: 'donut__label'
    });

    if (labels.show) {
      const labelValue = createElementNS('text', {
        class: 'donut-label__value',
        x: '43%',
        y: '36%'
      });
      labelValue.innerHTML = `${total}`;

      const labelUnit = createElementNS('text', {
        class: 'donut-label__unit',
        x: '43%',
        y: '40%'
      });
      labelUnit.innerHTML = `${labels.unit}`

      label.appendChild(labelValue);
      label.appendChild(labelUnit);
    }

    this.donut.appendChild(label);
    this.wrap.appendChild(this.donut);
  }
}

export default Donut;
