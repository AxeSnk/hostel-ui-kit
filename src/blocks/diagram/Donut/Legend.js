import { createElement } from './createElements';

class Legend {
  constructor(root, config) {
    this.root = root;
    this.config = config;
    this.createLegend();
    this.createList();
    this.createListItem();
  }

  createLegend() {
    this.legend = createElement('figcaption', { class: 'diagram__legend' });
    this.root.appendChild(this.legend);
  }

  createList() {
    this.list = createElement('ul', { class: 'diagram__legend-list' });
    this.legend.appendChild(this.list);
  }

  createListItem() {
    const { size, sectors } = this.config;

    sectors.forEach(item => {
      let { color, value, name, gradient } = item;

      if (item.color) {
        color = item.color;
      } else {
        color = `url(#${name})`;
      }

      let li = createElement('li', { class: `legend-item legend-item--${name}` });
      this.list.appendChild(li);

      let circle = createElement('div', {
        class: `legend-item__circle circle--${name}`
      });
      li.appendChild(circle);

      let title = createElement('span', { class: `legend-item__title title--${name}` });
      title.innerHTML = `${name}`;
      li.appendChild(title);
    });

  }
}

export default Legend;
