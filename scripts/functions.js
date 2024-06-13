function OnInput() {
    if (this.value) {
        sp.style.display = "block";
    } else {
        sp.style.display = "none";
    }
    this.style.height = 'auto';
    this.setAttribute('style', 'padding-bottom:8px;');
    this.style.height = (this.scrollHeight) + 'px';
}

function clearInput() {
    tx.value = "";
    sp.style.display = "none";
    tx.style.height = "46px";
}

function feelingLucky() {
    var query = document.querySelector('#search').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query) + '&btnI';
}

function submitForm() {
    if (tx.value) {
        fm.submit();
    }
}