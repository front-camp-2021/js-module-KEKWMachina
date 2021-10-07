/* eslint-disable radix */
export default class DoubleSlider {
  element;

  constructor ({
      min = 0,
      max = 0,
      filterName = 'No filters found'
  } = {}) {
      this.min = min,
      this.max = max,
      this.filterName = filterName,
      this.render();
      this.rangeSelector();
  }

  get template() {
      return `<div class="wrapper">
      <div class="values">
          <span>${this.filterName}</span>
          <span class="range1">
          ${this.min}
          </span>
          <span> &dash; </span>
          <span class="range2">
          ${this.max}
          </span>
      </div>
      <div class="container">
        <div class="slider-track"></div>
        <input type="range" min="${this.min}" max="${this.max}" value="${this.min}" class="slider-1">
        <input type="range" min="${this.min}" max="${this.max}" value="${this.max}" class="slider-2">
      </div>
    </div>
`
  }

  
  render() {
      const wrapper = document.createElement('div');

      wrapper.innerHTML = this.template;
      
      this.element = wrapper.firstElementChild;
  }

  rangeSelector() {
      const sliderOne = this.element.querySelector(".slider-1");
      const sliderTwo = this.element.querySelector(".slider-2");
      const displayValOne = this.element.querySelector(".range1");
      const displayValTwo = this.element.querySelector(".range2");
      const minGap = 0;
      const sliderTrack = this.element.querySelector(".slider-track");

      function slideOne() {
          if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
          }
          displayValOne.textContent = sliderOne.value;
     
        }
    
        function slideTwo() {
          if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
          }
          displayValTwo.textContent = sliderTwo.value;
      
        }
    
        function fillColor() {
          sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${100}% , #7e72f2 ${0}% , #7e72f2 ${0}%, #dadae5 ${100}%)`;
        }
    
        fillColor();
    
        sliderOne.addEventListener('change', () => {
          slideOne();
        });
    
        sliderTwo.addEventListener('change', () => {
          slideTwo();
        });
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
