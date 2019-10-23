'use strict';

let counter = sessionStorage.getItem('clickAmount') || 0;
const text = document.getElementById('add-text');
text.innerHTML = `You clicked 0 times`;

document.body.addEventListener('click', () => {
  sessionStorage.setItem('clickAmount', ++counter);
  text.innerHTML = `You clicked ${sessionStorage.clickAmount} times`;
});
