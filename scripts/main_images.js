let tx = document.querySelector('#search');
let sp = document.querySelector('.search__clear');
let sl = document.querySelector('.search__options__lupa');
let fm = document.querySelector('.search__form');
tx.addEventListener("input", OnInput);
tx.addEventListener("keypress", pressEnter);
sp.addEventListener("click", clearInput);
sl.addEventListener("click", submitForm);