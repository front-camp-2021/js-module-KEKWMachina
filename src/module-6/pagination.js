export default class Pagination {
  element;
  start = 0;
  pageIndex = 0;

  constructor({
    totalPages = 10,
    page = 1,
  } = {}) {
    this.totalPages = totalPages;
    this.pageIndex = page - 1;
    this.currentPage = page;
    this.render(); 
  }

  get template() {
    let bodyPages = `
    <div class="pagination">
      <button class="pagination__button-page-back"></button>
      <a href="#" class="pagination__page-outer-first">1</a>
      <div class="pagination__main">`;

    for (let i = 1; i < this.totalPages; i++) {
      if (i === this.totalPages - 1) {
        bodyPages = bodyPages + `</div>
        <a href="#" class="pagination__page-outer-last">${i + 1}</a>
        <button class="pagination__button-page-forward"></button>
      </div>`
      } else if (i === this.pageIndex) { 
        bodyPages = bodyPages + `<a href="#" class="pagination__page-active">${i + 1}</a>`
      } else {
        bodyPages = bodyPages + `<a href="#" class="pagination__page">${i + 1}</a>\n`;
      }
    }

    return bodyPages;
  }

  render() {
    const paginationWrapper = document.createElement("div");
    paginationWrapper.innerHTML = this.template;
    this.element = paginationWrapper.firstElementChild;
  
  }

  changePage() {
    const changePage = new CustomEvent('change-page', {
      bubbles: true
    });
    const pageButtons = document.querySelector('.pagination');

    pageButtons.addEventListener('pointerdown', event => {
      event.target.dispatchEvent(changePage);
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
