import { createElement } from './createElements';

class Legend {
  constructor(root, config) {
    this.root = root;
    this.config = config;
    this.createLegend();
    this.createList();
    this.createListItem();
  }

  getList() {
    return this.list;
  }

  createLegend() {
    this.legend = createElement('div', { class: 'diagram__legend' });
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

      const li = createElement('li', {
        class: `legend-item legend-item--${name}`,
        'data-name': name
      });
      this.list.appendChild(li);

      const circle = createElement('div', {
        class: `legend-item__circle circle--${name}`
      });
      li.appendChild(circle);

      const title = createElement('span', {
        class: `legend-item__title title--${name}`,
        'data-name': name
      });
      title.innerHTML = `${name}`;
      li.appendChild(title);
    });
  }
}

export default Legend;
