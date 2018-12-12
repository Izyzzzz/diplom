window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // Big slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.page > div'),
        logo = document.querySelectorAll('.sidecontrol a');

    showSlides(slideIndex);

    function showSlides(n) {
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    for (let i = 1; i <= logo.length; i = i + 2) {

        logo[i].addEventListener('click', function () {
            if (i + 1 == logo.length) {
                showSlides(slideIndex = 1);
            } else {
                plusSlides(1);
            }
        });

        logo[i - 1].addEventListener('click', function () {
            showSlides(slideIndex = 1);
        });
    }

});