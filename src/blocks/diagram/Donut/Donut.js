import { createElement, createElementNS } from './createElements';
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
    this.addListenerLegends();
    this.addListenerPath();
  }

  createWrap() {
    this.figure = createElement('figure', { class: 'diagram__figure' });
    this.wrap = createElement('div', { class: 'diagram__wrap' });
    this.figure.appendChild(this.wrap);
    this.root.appendChild(this.figure);
  }

  createDonut() {
    const {
      size, total, labels,
    } = this.config;

    this.donut = createElementNS('svg', {
      class: 'diagram__donut',
      width: `${size}%`,
      height: `${size}%`,
      viewBox: '0 0 42 42',
    });

    this.label = createElementNS('g', {
      class: 'diagram__label',
    });

    if (labels.show) {
      this.labelValue = createElementNS('text', {
        class: 'diagram__value',
        x: '43%',
        y: '36%',
      });
      this.labelValue.innerHTML = `${total}`;

      this.labelUnit = createElementNS('text', {
        class: 'diagram__unit',
        x: '43%',
        y: '40%',
      });
      this.labelUnit.innerHTML = `${labels.unit}`;

      this.label.appendChild(this.labelValue);
      this.label.appendChild(this.labelUnit);
    }

    this.donut.appendChild(this.label);
    this.wrap.appendChild(this.donut);
  }

  addListenerLegends() {
    const list = this.legend.getList().querySelectorAll('.diagram__legend-title');
    list.forEach((item) => {
      item.addEventListener('mouseover', this.handlePathOver);
      item.addEventListener('mouseout', this.handlePathOut);
    });
  }

  handlePathOver = (e) => {
    const sector = this.donut.querySelectorAll('.diagram__sector');
    sector.forEach((item) => {
      const isTarget = item.dataset.name === e.target.dataset.name;
      if (isTarget) {
        item.dispatchEvent(new Event('mouseover'));
      }
    });
  }

  handlePathOut = (e) => {
    const sector = this.donut.querySelectorAll('.diagram__sector');
    sector.forEach((item) => {
      const isTarget = item.dataset.name === e.target.dataset.name;
      if (isTarget) {
        item.dispatchEvent(new Event('mouseout'));
      }
    });
  }

  addListenerPath() {
    const sector = this.donut.querySelectorAll('.diagram__sector');
    sector.forEach((item) => {
      item.addEventListener('mouseover', this.changeLabel);
      item.addEventListener('mouseout', this.reDrawLabelValue);
    });
  }

  changeLabel = (e) => {
    const { value, name } = e.target.dataset;
    this.labelValue.innerHTML = value;
    this.labelValue.setAttribute('fill', `url(#${name})`);
    this.labelUnit.setAttribute('fill', `url(#${name})`);
  }

  reDrawLabelValue = () => {
    this.labelValue.innerHTML = this.config.total;
    this.labelValue.removeAttribute('fill');
    this.labelUnit.removeAttribute('fill');
  }
}

export default Donut;
