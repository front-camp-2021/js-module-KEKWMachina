export default class Card {
    element;
  
    constructor ({
      id = '',
      images = [],
      title = '',
      rating = 0,
      price = 0,
      category = '',
      brand = ''
    } = {}) {
      this.id = id;
      this.images = images;
      this.title = title;
      this.rating = rating;
      this.price = price;
      this.category = category;
      this.brand = brand;
  
      this.render();
    }
  
    getTemplate () {
      return `<div class="merchandise-cards__card" data-element="body">
      <img src="${this.images[0]}" class="merchandise-cards__image">
      <div class="merchandise-cards__rating-and-price">
        <div class="merchandise-cards__rating">${this.rating}</div>
        <div class="merchandise-cards__price">₴${this.price}</div>
      </div>
      <ul class="merchandise-cards__item-descriptions">
        <li class="merchandise-cards__item-name">${this.title}</li>
        <li class="merchandise-cards__item-description">Redesigned from scratch and completely revised</li>
      </ul>
      <div class="merchandise-cards__buttons">
        <button class="merchandise-cards__wishlist-button">WISHLIST</button>
        <button class="merchandise-cards__add-to-cart-button">ADD TO CART</button>
      </div>
    </div>`
    }
  
    render () {
      const wrapper = document.createElement('div');
  
      wrapper.innerHTML = this.getTemplate();
  
      this.element = wrapper.firstElementChild;
    }
  
    remove () {
      if (this.element) {
        this.element.remove();
      }
    }
  
    destroy () {
      this.remove();
      this.element = null;
    }
  }