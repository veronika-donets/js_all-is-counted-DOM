'use strict';

let counter = sessionStorage.getItem('clickAmount') || 0;
const text = document.getElementById('add-text');
text.innerHTML = `You clicked ${counter} times`;

document.body.addEventListener('click', () => {
  counter++;
  sessionStorage.setItem('clickAmount', counter);
  text.innerHTML = `You clicked ${counter} times`;
});
