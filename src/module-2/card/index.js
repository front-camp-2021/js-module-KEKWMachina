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

  render () {
    const cardWrapper = document.createElement('section');
    cardWrapper.className = 'card';

    const cardImageWrapper = document.createElement('div');
    cardImageWrapper.className = 'card-img';

    const cardImg = new Image();
    cardImg.src = this.images[0];

    const ratingAndPrice = document.createElement('div');
    ratingAndPrice.className = 'rating-and-price';

    const ratingWrapper = document.createElement('div');
    ratingWrapper.className = 'rating';

    const ratingIcon = document.createElement('div');
    ratingIcon.className = 'icon-rating';

    const ratingNumber = document.createElement('span');
    ratingNumber.className = 'rating-number';

    const price = document.createElement('span');
    price.className = 'price';

    const merchandiseDescriptionList = document.createElement('ul');
    merchandiseDescriptionList.className = 'card-ul';

    const merchandiseName = document.createElement('li');
    merchandiseName.className = 'item-name';

    const merchandiseDecs = document.createElement('li');
    merchandiseDecs.className = 'item-description';

    const wishlistAndCartWrapper = document.createElement('div');
    wishlistAndCartWrapper.className = 'wishlist-cart-btn';

    const wishlistButton = document.createElement('button');
    wishlistButton.className = 'wishlist';

    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'cart';

    cardImageWrapper.append(cardImg);
    cardWrapper.append(cardImageWrapper);
    cardWrapper.append(ratingAndPrice);
    cardWrapper.append(merchandiseDescriptionList);
    cardWrapper.append(wishlistAndCartWrapper);

    ratingAndPrice.append(ratingWrapper);
    ratingAndPrice.append(price);

    ratingWrapper.append(ratingNumber);
    ratingWrapper.append(ratingIcon);
    
    merchandiseDescriptionList.append(merchandiseName);
    merchandiseDescriptionList.append(merchandiseDecs);

    wishlistAndCartWrapper.append(wishlistButton);
    wishlistAndCartWrapper.append(addToCartButton);

    
    price.textContent = `${this.price}₴`;
    ratingNumber.textContent = this.rating;
    merchandiseName.textContent = this.title;
    merchandiseDecs.textContent = 'Completely Revised';
    wishlistButton.textContent = 'WISHLIST';
    addToCartButton.textContent = 'ADD TO CART';
    this.element = cardWrapper;
  }
}


