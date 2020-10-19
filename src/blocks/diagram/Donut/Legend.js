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
      let { color, value, title, gradient } = item;

      if (item.color) {
        color = item.color;
      } else {
        color = `url(#${gradient.name})`;
      }

      const li = createElement('li', {
        class: `diagram__item diagram__item_theme_${gradient.name}`,
        'data-name': gradient.name
      });
      this.list.appendChild(li);

      const circle = createElement('div', {
        class: `diagram__circle diagram__circle_theme_${gradient.name}`
      });
      li.appendChild(circle);

      const titleLegend = createElement('span', {
        class: `diagram__legend-title diagram__legend-title_theme_${gradient.name}`,
        'data-name': gradient.name
      });
      titleLegend.innerHTML = `${title}`;
      li.appendChild(titleLegend);
    });
  }
}

export default Legend;
