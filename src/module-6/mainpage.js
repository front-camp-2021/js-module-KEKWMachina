import Search from './search.js';

export default class MainPage {
    element;

    constructor() {
        this.render();
       
        this.renderSearch();
    }

    get template() {
        return `
      <div data-element="body">
        <header class="header">
        <div class="header__logo"></div>
        <div class="header__text">Online Store</div>
      </header>
    
      <div class="breadcrumbs">
        <div class="breadcrumbs__home-button"></div>
        <div class="breadcrumbs__arrows"></div>
        <div class="breadcrumbs__active-page">eCommerce</div>
        <div class="breadcrumbs__arrows"></div>
        <div class="breadcrumbs__page">Electronics</div>
      </div>
    
      <div class="main-content-nav">
        <div class="filters-header">
          <div class="filters-header__nav">
            <div class="filters-header__marker">Filters</div>
            <button class="filters-header__filters-hide-button"></button>
          </div>
        </div>
        <div class="search-resluts">
          <div class="search-resluts__number">7588 Results Found</div>
          <button class="search-resluts__wishlist-button"></button>
        </div>
      </div>
    
      <div class="main-content">
        <div class="filters">
    
    
        </div>
        <div class="cards">
          <div class="searchfield">
        
          </div>
        </div>
      </div>
    
      <div class="pagination__wrapper"></div>
      </div>
        `
    }

    render() {
        const mainPageWrapper = document.createElement('div');
        mainPageWrapper.innerHTML = this.template;
        this.element = mainPageWrapper;
    }


    renderSearch() {
       this.element.querySelector('.searchfield').append(new Search().element);
    }
}