/*jshint esversion: 6*/
const Counter = {
  rootElement: '#app',
  count: parseInt(localStorage.getItem('count') !== null? localStorage.getItem('count') : 0),

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
      localStorage.setItem('count', this.count);
      this.render();
    });
    this.minusButton.addEventListener('click', () => {
      this.count -= parseInt(document.querySelector('#dec').value);
      localStorage.setItem('count', this.count);
      this.render();
    });
  },

    render: function () {
    this.output.textContent = localStorage.getItem('count') !== null? localStorage.getItem('count') : 0;
    console.log(localStorage.getItem('count'));
  },

};
  Counter.start();
