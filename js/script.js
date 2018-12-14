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


    // Slider five page
    let feedSlider = document.querySelector('.feed__slider');

    feedSlider.style.display = '-webkit-box';

    let slickPrevThree = document.querySelector('.button .slick-prev'),
        slickNextThree = document.querySelector('.button .slick-next'),
        boxSliderThree = document.querySelector('.feed__slider');

    if (!slides.length) {} else {
        slickNextThree.addEventListener('click', function () {
            boxSliderThree.children[0].classList.remove('feed__item-active');
            boxSliderThree.children[1].classList.add('feed__item-active');
            clickNextThree();
            clickNextThree();
        });
        slickPrevThree.addEventListener('click', function () {
            clickPrevThree();
            clickPrevThree();
            boxSliderThree.children[1].classList.remove('feed__item-active');
            boxSliderThree.children[0].classList.add('feed__item-active');
        });
    }

    function clickNextThree() {
        boxSliderThree.appendChild(boxSliderThree.firstChild);
    }

    function clickPrevThree() {
        boxSliderThree.insertBefore(boxSliderThree.lastChild, boxSliderThree.firstChild);
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
    if (!slides.length) {} else {
        plusContent.addEventListener('click', function () {
            document.location.replace("./modules.html");
        });
    }

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
    if (!slides.length) {} else {
        hanson.style.display = 'none';
    }

    logo[3].addEventListener('click', function () {
        setTimeout(function () {
            hanson.style.display = 'block';
        }, 3000);
    });


    //------------------------------------------------------------
    //Maska

    let input = document.querySelector('#phone'),
        maska = "+1 (___) ___-____";

    input.addEventListener("input", mask);

    function mask() {
        let i = 0,
            constant = maska.replace(/\D/g, ""),
            inputValue = this.value.replace(/\D/g, "");

        if (constant.length >= inputValue.length) {
            inputValue = constant;
        }

        this.value = maska.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < inputValue.length ? inputValue.charAt(i++) : i >= inputValue.length ? "" : a;
        });

    }

    //----------------------------------------------------------------
    // Ban cyrillic email

    let inputEmail = document.querySelector('input[type="email"]');

    inputEmail.addEventListener("input", function () {
        this.value = inputEmail.value.replace(/[^0-9a-zA-Z-@._]+/gi, "");
    });


    //------------------------------------------------------------------------
    // Form

    let inputAll = document.querySelectorAll('input');

    inputAll[0].setAttribute("name", "name");
    inputAll[1].setAttribute("name", "profession");
    inputAll[2].setAttribute("name", "email");
    inputAll[3].setAttribute("name", "phone");
    inputAll[4].setAttribute("name", "name");
    inputAll[5].setAttribute("name", "email");
    inputAll[6].setAttribute("name", "when");

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...',
        phone: 'Слишком мало символов в телефоне.'
    };

    let form = document.querySelector('.join__evolution .form'),
        formCont = document.querySelector('.schedule__form .form'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    
    function sendForm(elem, numElem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            let formInputTwo = elem.getElementsByTagName('input');
            let flag = false;
            
            (formInputTwo[numElem].value.replace(/\D/g, "").length > 10 || numElem === 0) ?  flag = true : flag = false

            if (flag) {
                elem.appendChild(statusMessage);                

                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function (resolve, reject) {
                        let request = new XMLHttpRequest();

                        request.open('POST', 'server.php');

                        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                        request.addEventListener('readystatechange', function () {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4 && request.status == 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        });
                        request.send(data);
                    });
                }

                function clearInput() {
                    for (let i = 0; i < formInputTwo.length; i++) {
                        formInputTwo[i].value = '';
                    }
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput);
            } else {
                elem.appendChild(statusMessage);
                statusMessage.innerHTML = message.phone;
            }

        });
    }

    sendForm(form, 3);
    sendForm(formCont, 0);




});