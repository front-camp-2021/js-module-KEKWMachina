import FiltersList from './filtersList.js';
import DoubleSlider from './DoubleSlider.js';

export default class SideBar {
  element;

  constructor({
    categoriesFilter = [],
    brandFilter = [],
    priceSliderData = {},
    ratingSliderData = {}
  } = {}) {
    this.categoriesFilter = categoriesFilter;
    this.brandFilter = brandFilter;
    this.priceSliderData = priceSliderData;
    this.ratingSliderData = ratingSliderData;
    this.render();
    this.getSubElements();
    this.update(this.categoriesFilter, this.brandFilter, this.priceSliderData, this.ratingSliderData)
  }

  get template() {
    return `
    <div>
      <div class="filters__main" data-element="body">
        <div class="filters__slider">
        </div>
      </div>
      <button class="filters__filters-reset-button">Reset Filters</button>
    </div>`
  }

  render() {
    const sideBarWrapper = document.createElement('div');
    sideBarWrapper.innerHTML = this.template
    this.element = sideBarWrapper.firstElementChild;
  }

  getSubElements() {
    const result = {};
    const elements = this.element.querySelectorAll('[data-element]');

    for (const subElement of elements) {
      const name = subElement.dataset.element;
      result[name] = subElement;
    }

    this.subElements = result;
  }

  update(categoriesData = [], brandsData = [], ratingSliderData = {}, priceSliderData = {}) {
    this.categoriesFilter = categoriesData;
    this.brandFilter = brandsData;
    this.priceSliderData = ratingSliderData;
    this.ratingSliderData = priceSliderData;

    const filters = [
      new DoubleSlider(this.priceSliderData).element,
      new DoubleSlider(this.ratingSliderData).element,
      new FiltersList({
        title: 'Category',
        list: this.categoriesFilter
      }).element,
      new FiltersList({
        title: 'Brands',
        list: this.brandFilter
      }).element
    ]

    if (filters) {
      this.subElements.body.replaceChildren(...filters)
    } else {
      this.subElements.body.innerText = 'No Products Found';
    }
  }

  dispatchResetFilters() {
    const resetFilters = new CustomEvent('clear-filters');
    const resetFiltersButton = this.element.querySelector('.filters__filters-reset-button');

    resetFiltersButton.addEventListener('pointerdown', () => {
      resetFiltersButton.dispatchEvent(resetFilters);
    })
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