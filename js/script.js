window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // Big slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.page > div'),
        modules = document.querySelectorAll('.module'),
        logo = document.querySelectorAll('.sidecontrol a'),
        next = document.querySelectorAll('.nextmodule'),
        prev = document.querySelectorAll('.prevmodule');

    showSlides(slideIndex);

    function showSlides(n) {
        if (!slides.length) {
            modules.forEach((item) => item.style.display = 'none');
            modules[slideIndex - 1].style.display = 'block';
        } else {
            slides.forEach((item) => item.style.display = 'none');
            slides[slideIndex - 1].style.display = 'block';

        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Slider Loan and modules left

    for (let i = 1; i <= logo.length; i = i + 2) {

        logo[i].addEventListener('click', function () {
            (i + 1 == logo.length) ? showSlides(slideIndex = 1): plusSlides(1);
        });
        
        logo[i - 1].addEventListener('click', function () {
            (!slides.length) ? document.location.replace("./index.html") : showSlides(slideIndex = 1);
        });
    }

    //Slider modules bottom

    for (let i = 1; i <= next.length; i++) {

        next[i - 1].addEventListener('click', function () {
            (i == next.length) ? showSlides(slideIndex = 1): plusSlides(1);
        });

        prev[i - 1].addEventListener('click', function () {
            (i == 1) ? showSlides(slideIndex = next.length): plusSlides(-1);
        });
    }

    // Slider Loan bottom

    let bottomSlider = document.querySelector('.showup__content-slider'),
        slickPrev = document.querySelector('.slick-prev'),
        slickNext = document.querySelector('.slick-next');

    if (!slides.length) {} else {
        slickNext.addEventListener('click', function () {
            bottomSlider.children[0].classList.remove('card-active');
            bottomSlider.children[1].classList.add('card-active');
            clickNext();
            clickNext();
        });
        slickPrev.addEventListener('click', function () {
            clickPrev();
            clickPrev();
            bottomSlider.children[1].classList.remove('card-active');
            bottomSlider.children[0].classList.add('card-active');
        });
    }



    function clickNext() {
        bottomSlider.appendChild(bottomSlider.firstChild);
    }

    function clickPrev() {
        bottomSlider.insertBefore(bottomSlider.lastChild, bottomSlider.firstChild);
    }



    //Video demonstration

    let play = document.querySelectorAll('.play'),
        overlay = document.querySelector('.overlay'),
        frameVideo = document.getElementById('frame'),
        closeBtn = document.querySelector('.close');

    for (let i = 0; i < play.length; i++) {
        play[i].addEventListener('click', function () {
            overlay.style.display = 'block';
            frameVideo.src = play[i].dataset.url;
        });
    }

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    // Go to another page

    let plusContent = document.querySelector('.plus__content');

        plusContent.addEventListener('click' , function() {
            // document.location.href = plusContent.value;
            document.location.replace("./modules.html");
        });


    // Add links slider to module

    // let cardLink = document.querySelectorAll('.showup__content-slider .card');

    // for (let i = 0; i < cardLink.length; i++) {

    //     cardLink[i].href = `./modules.html#`;
    //     cardLink[i].addEventListener('click', function () {

    //         localStorage.setItem('myKey', i);

    //     });
    // }
    // window.onload = function () {
    //     let slideIndex = localStorage.getItem('myKey');
    //     if (!slides.length) {
    //         modules.forEach((item) => item.style.display = 'none');
    //         modules[slideIndex].style.display = 'block';
    //     }
    //     console.log(slideIndex);
    //     // return showSlides(slideIndex);
    // };

    // console.log(slideIndex);

});