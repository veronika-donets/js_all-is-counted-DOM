'use strict';

if (!sessionStorage.hasOwnProperty('clickAmount')) {
  sessionStorage.setItem('clickAmount', 0);
}

document.getElementById('add-text').innerHTML
  = `You clicked ${sessionStorage.clickAmount} times`;

document.body.addEventListener('click', (targetEvent) => {
  sessionStorage.clickAmount++;
  document.getElementById('add-text').innerHTML
    = `You clicked ${sessionStorage.clickAmount} times`;
});
