let tx = document.querySelector('#search');
let sp = document.querySelector('.search__clear');
let bfl = document.querySelector('.btn-feeling-luck');

tx.addEventListener("input", OnInput);
sp.addEventListener("click", clearInput);
bfl.addEventListener("click", feelingLucky);