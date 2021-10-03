import Card from './card.js';

export default class CardsList {
  element;
  
  constructor ({data = [], CardComponent = {}}) {
    this.data = data;
    this.CardComponent = CardComponent;
    this.render();
  }

  fillCardWrapper(cardWrapper, cardsData) {
    cardsData.map((el) => {
      const {element} = new Card(el);
      cardWrapper.append(element);
    });
  }

  render() {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("merchandise-cards");
    this.element = cardWrapper;
    this.fillCardWrapper(this.element, this.data);
  }

  update(newData = []) {
    this.data = newData;
    this.element.innerHTML = ''
    this.fillCardWrapper(this.element, newData)
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
