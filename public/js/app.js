/*jshint esversion: 6*/

const Counter = {
  rootElement: '#app',
  count: 0,

  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },

  cacheDOM: function () {
    this.root = document.querySelector('#app');
    this.button = document.querySelector('#increment');
    this.minusButton = document.querySelector('#decrement');
    this.output = document.querySelector('#output');
  },

  bindEvents: function () {
    this.button.addEventListener('click', () => {
      this.count += parseInt(document.querySelector('#inc').value);
      this.render();
    });
    this.minusButton.addEventListener('click', () => {
      this.count -= parseInt(document.querySelector('#dec').value);
      this.render();
    });
  },

  render: function () {
    this.output.textContent = this.count;
  }
};
  Counter.start();
