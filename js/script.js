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
            (!slides.length) ? document.location.replace("./index.html"): showSlides(slideIndex = 1);
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

    // Slider third page

    let slickPrevTwo = document.querySelector('.modules__info-btns .slick-prev'),
        slickNextTwo = document.querySelector('.modules__info-btns .slick-next'),
        boxSliderTwo = document.querySelector('.modules__content-slider');

    if (!slides.length) {} else {
        logo[3].addEventListener('click', function () {
            let timerId = setInterval(function () {
                boxSliderTwo.children[0].classList.remove('card-active');
                boxSliderTwo.children[1].classList.add('card-active');
                clickNextTwo();
                clickNextTwo();
            }, 4000);
        })
        slickNextTwo.addEventListener('click', function () {
            boxSliderTwo.children[0].classList.remove('card-active');
            boxSliderTwo.children[1].classList.add('card-active');
            clickNextTwo();
            clickNextTwo();
        });
        slickPrevTwo.addEventListener('click', function () {
            clickPrevTwo();
            clickPrevTwo();
            boxSliderTwo.children[1].classList.remove('card-active');
            boxSliderTwo.children[0].classList.add('card-active');
        });
    }

    function clickNextTwo() {
        boxSliderTwo.appendChild(boxSliderTwo.firstChild);
    }

    function clickPrevTwo() {
        boxSliderTwo.insertBefore(boxSliderTwo.lastChild, boxSliderTwo.firstChild);
    }



    //------------------------------------------------------------------
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

    //--------------------------------------------------------------------
    // Go to another page

    let plusContent = document.querySelector('.plus__content');

    plusContent.addEventListener('click', function () {
        document.location.replace("./modules.html");
    });

    //----------------------------------------------------------------------
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


    //---------------------------------------------------------------------------
    //Add card

    let addItemLeft = 1,
        addItemRight = 1,
        addText = ['First', 'Second', 'Third'],
        officernew = document.querySelector('.officernew'),
        officerold = document.querySelector('.officerold'),
        plusLeft = document.querySelector('.officerold .plus'),
        plusRight = document.querySelector('.officernew .plus');

    if (!slides.length) {} else {
        plusLeft.addEventListener('click', function () {
            let newDiv = document.createElement('div');
            newDiv.className = "officer__card-item";
            newDiv.innerHTML = `<div class="card__counter">0${addItemLeft}</div><div class="card__descr">${addText[addItemLeft - 1]} step with some text and explanation</div>`;
            officerold.insertBefore(newDiv, officerold.children[addItemLeft]);
            addItemLeft++;
            if (addItemLeft === 4) {
                let officeroldItem = document.querySelectorAll('.officerold .officer__card-item')[3];
                officerold.removeChild(officeroldItem);
            }
        });

        plusRight.addEventListener('click', function () {
            let newDiv = document.createElement('div');
            newDiv.className = "officer__card-item";
            newDiv.innerHTML = `<div class="card__counter">0${addItemRight}</div><div class="card__descr">${addText[addItemRight - 1]} step with some text and explanation</div>`;
            officernew.insertBefore(newDiv, officernew.children[addItemRight]);
            addItemRight++;
            if (addItemRight === 4) {
                let officernewItem = document.querySelectorAll('.officernew .officer__card-item')[3];
                officernew.removeChild(officernewItem);
            }
        });
    }

    //------------------------------------------------------------
    // The appearance of the card

    let hanson = document.querySelector('.hanson');
    hanson.style.display = 'none';


    // let computedStyle = getComputedStyle(document.querySelector('.modules'));
    logo[3].addEventListener('click', function () {
        // console.log(computedStyle.display);
        setTimeout(function () {
            hanson.style.display = 'block';
        }, 3000);
    })


});