import {debounce} from './debounce.js';

export default class Search {
    element;
    subElements = {};

    constructor() {
        this.render();
        this.dispatchSearchEvent();
    }

    get template() {
        return `
        <div class="searchfield">
          <input class="searchfield__input" placeholder="Search" data-element="search">
        </div>
        `;
    }

    render() {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = this.template;
        this.element = wrapper.firstElementChild;
    }

    dispatchSearchEvent() {
        this.element.addEventListener("input", debounce((event) => {
            const searchParams = event.target.value.trim();

            this.element.dispatchEvent(
                new CustomEvent("search-filter", {
                    detail: searchParams,
                })
            );
        }));
    }

    clear() {
        this.element.reset();
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
