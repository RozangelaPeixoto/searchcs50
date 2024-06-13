let tx = document.querySelector('#search');
let sp = document.querySelector('.search__clear');
let bfl = document.querySelector('.btn-feeling-luck');
let fm = document.querySelector('.search__form');
tx.addEventListener("input", OnInput);
tx.addEventListener("keypress", pressEnter);
sp.addEventListener("click", clearInput);
bfl.addEventListener("click", feelingLucky);