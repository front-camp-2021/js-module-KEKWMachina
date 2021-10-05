export default class FiltersList {
  element;

  constructor ({
     title = '',
     list = []
  } = {}) {
    this.title = title;
    this.list = list;
    this.render();
    this.getSubElements();
    this.update(this.list);
  }

  get template() {
    return `<div><div data-element="body">
    </div></div>`;
  }

  render() {
    const filtersWrapper = document.createElement('div');
    filtersWrapper.innerHTML = this.template;
    this.element = filtersWrapper.firstElementChild;
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

  update(list = []) {
    const title = document.createElement('div');
    title.innerHTML = `<h5 class="filters__section-header">${this.title}</h5>`
    this.list = list;

    const listItems = list.map(item => {
      const listElement = document.createElement('div');
      listElement.className = 'filters__checkbox';
      
      if(item.checked) {
        listElement.innerHTML = `<input type="checkbox" id="${item.value}" name="$10" class="filters__checkbox-square" checked>
      <label for="${item.value}">${item.title}</label>`;
      } else {
        listElement.innerHTML = `<input type="checkbox" id="${item.value}" name="$10" class="filters__checkbox-square">
      <label for="${item.value}">${item.title}</label>`;
      }

      return listElement;
    });

    if(listItems.length) {
      this.subElements.body.replaceChildren(title, ...listItems);
    } else {
      this.subElements.body.innerText = 'No Filters Found';
    }
  }

  dispatchCheck() {
    const addFilter =  new CustomEvent('add-filter');
    const removeFilter = new CustomEvent('remove-filter');

    this.element.addEventListener('change', event => {
      if (event.target.checked) {
        this.element.dispatchEvent(addFilter);
      } else {
        this.element.dispatchEvent(removeFilter);
      }
    })
  }

  reset() {
    this.list.forEach(item => {
      item.checked = false;
    });

    this.update(this.list)
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
