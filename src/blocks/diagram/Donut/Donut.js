import { createElement, createElementNS } from './createElements';
import createGradient from './createGradient';
import Legend from './Legend';
import Sectors from './Sectors';
import getSectorPath from './getSectorPath';

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
    this.figure = createElement('figure', { class: 'diagram' });
    this.wrap = createElement('div', { class: 'diagram__wrap' });
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

    this.label = createElementNS('g', {
      class: 'donut__label'
    });

    if (labels.show) {
      this.labelValue = createElementNS('text', {
        class: 'donut__label__value',
        x: '43%',
        y: '36%'
      });
      this.labelValue.innerHTML = `${total}`;

      this.labelUnit = createElementNS('text', {
        class: 'donut__label__unit',
        x: '43%',
        y: '40%'
      });
      this.labelUnit.innerHTML = `${labels.unit}`;

      this.label.appendChild(this.labelValue);
      this.label.appendChild(this.labelUnit);
    }

    this.donut.appendChild(this.label);
    this.wrap.appendChild(this.donut);
  }

  addListenerLegends() {
    const list = [
      ...this.legend.getList().querySelectorAll('.legend-item__title')
    ];
    list.map(item => {
      item.addEventListener('mouseover', this.handlePathOver.bind(this));
      item.addEventListener('mouseout', this.handlePathOut.bind(this));
    });
  }

  handlePathOver(e) {
    const sector = [...this.donut.querySelectorAll('.donut__sector')];
    sector.map(item => {
      const isTarget =
        item.getAttribute('data-name') == e.target.getAttribute('data-name');
      if (isTarget) {
        item.dispatchEvent(new Event('mouseover'));
      }
    });
  }

  handlePathOut(e) {
    const sector = [...this.donut.querySelectorAll('.donut__sector')];
    sector.map(item => {
      const isTarget =
        item.getAttribute('data-name') == e.target.getAttribute('data-name');
      if (isTarget) {
        item.dispatchEvent(new Event('mouseout'));
      }
    });
  }

  addListenerPath() {
    const sector = [...this.donut.querySelectorAll('.donut__sector')];
    sector.map(item => {
      item.addEventListener('mouseover', this.changeLabel.bind(this));
      item.addEventListener('mouseout', this.reDrawLabelValue.bind(this));
    });
  }

  changeLabel(e) {
    const value = e.target.getAttribute('data-value');
    const name = e.target.getAttribute('data-name');
    this.labelValue.innerHTML = value;
    this.labelValue.setAttribute('fill', `url(#${name})`);
    this.labelUnit.setAttribute('fill', `url(#${name})`);
  }

  reDrawLabelValue() {
    this.labelValue.innerHTML = this.config.total;
    this.labelValue.removeAttribute('fill');
    this.labelUnit.removeAttribute('fill');
  }
}

export default Donut;