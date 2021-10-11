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
    return `<section class="card">
    <div class="card-img">
        <img src="${this.images[0]}" alt="Merchendise image">
    </div>
    
    <div class="rating-and-price">
        <div class="rating">
            <span>${this.rating}</span>
            <div class="icon-rating"></div>
        </div>
        <span class="price">$${this.price}</span>
    </div>
    <ul class="card-ul">
        <li class="item-name">${this.title}</li>
        <li class="item-description">Redesigned from scratch and completely revised.</li>
    </ul>
    <div class="wishlist-cart-btn">
        <button class="wishlist"> <div class="wishlist-img"></div> WISHLIST</button>
        <button class="cart"> <div class="cart-img"></div> ADD TO CART</button>
    </div>
    </section>`
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