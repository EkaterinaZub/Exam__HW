
let offset = 0;
const slidersContainer = document.querySelector('.container__sliders');

document.querySelector('.right').addEventListener('click', function () {
    offset = offset + 200;
    if (offset > 1600) {
        offset = 0;
    }

    slidersContainer.style.left = -offset + 'px';

})

document.querySelector('.left').addEventListener('click', function () {
    offset = offset - 200;
    if (offset < 0) {
        offset = 1600;
    }

    slidersContainer.style.left = -offset + 'px';

})


const sliders = document.querySelectorAll('.slide__img');
const slide = Array.from(sliders);
const popup = document.querySelector('.popup');
const span = document.querySelector('.popup__span');

slide.forEach(function (element) {
   
    element.addEventListener('click', function (even) {

        even.preventDefault();
        
        popup.style.display = 'block';
        const popupImg = document.querySelector('.popup__img');
        popupImg.src = element.getAttribute('src');

    })
})


span.addEventListener('click', function (even) {
  
    popup.style.display = 'none';
})


