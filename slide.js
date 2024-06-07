let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5) {
        counter = 1;
    }
},2500);
// document.querySelector('.next-head').classList.add('js-next-hide');