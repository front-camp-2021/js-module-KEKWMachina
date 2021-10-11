import Card from './card.js';

export default class CardsList {
  element;
  subElements = {};

  constructor ({data = [], CardComponent = {}} = {}) {
    this.data = data;
    this.CardComponent = CardComponent;
    this.render();
    this.getSubElements();
    this.update(this.data);
  }

  get template() {
    return `<div class="merchandise-cards__container"><div class="merchandise-cards" data-element="body">
    </div></div>`
  }

  render() {
    const cardWrapper = document.createElement("div");
    cardWrapper.innerHTML = this.template;
    this.element = cardWrapper.firstElementChild;
  }

  getSubElements() {
    const result = {};
    const elements = this.element.querySelectorAll('[data-element]');

    for(const subElement of elements) {
      const name = subElement.dataset.element;
      result[name] = subElement;
    }

    this.subElements = result;
  }

  update(data = []) {
    this.data = data;

    const cards = data.map(item => {

      return new Card(item).element;
    });

    if (cards.length) {
      this.subElements.body.replaceChildren(...cards)
    } else {
      this.subElements.body.innerText = 'No Products Found';
    }

  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
