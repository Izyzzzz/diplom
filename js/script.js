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
        showSlides(Number(slideIndex += n));
    }

    // Slider Loan and modules left

    for (let i = 1; i <= logo.length; i = i + 2) {

        logo[i].addEventListener('click', function () {
            (i + 1 == logo.length) ? showSlides(slideIndex = 1): plusSlides(1);
            blockVideo();
        });

        logo[i - 1].addEventListener('click', function () {
            (!slides.length) ? document.location.replace("./index.html"): showSlides(slideIndex = 1);
            sessionStorage.clear();
        });
    }

    //Slider modules bottom

    for (let i = 1; i <= next.length; i++) {

        next[i - 1].addEventListener('click', function () {
            (i == next.length) ? showSlides(slideIndex = 1): plusSlides(1);
            blockVideo();
        });

        prev[i - 1].addEventListener('click', function () {
            (i == 1) ? showSlides(slideIndex = next.length): plusSlides(-1);
            blockVideo();
        });
    }

    // Slider Box

    function sliderBox(box, prev, next, classActive, flag, numFlag) {
        if (!slides.length) {} else {
            if (flag) {
                logo[numFlag].addEventListener('click', function () {
                    let timerId = setInterval(function () {
                        box.children[0].classList.remove(classActive);
                        box.children[1].classList.add(classActive);
                        clickNext();
                    }, 4000);
                });
            }
            next.addEventListener('click', function () {
                box.children[0].classList.remove(classActive);
                box.children[1].classList.add(classActive);
                clickNext();
            });
            prev.addEventListener('click', function () {
                clickPrev();
                box.children[1].classList.remove(classActive);
                box.children[0].classList.add(classActive);
            });
        }

        function clickNext() {
            box.appendChild(box.children[0]);
        }

        function clickPrev() {
            box.insertBefore(box.children[box.children.length - 1], box.children[0]);
        }
    }

    // Slider Loan bottom

    let showupSlider = document.querySelector('.showup__content-slider');
    if (!slides.length) {} else {
        showupSlider.style.display = '-webkit-box';
    }

    let bottomSlider = document.querySelector('.showup__content-slider'),
        slickPrev = document.querySelector('.slick-prev'),
        slickNext = document.querySelector('.slick-next');

    sliderBox(bottomSlider, slickPrev, slickNext, 'card-active');

    // Slider third page

    let modulesSlider = document.querySelector('.modules__content-slider');
    if (!slides.length) {} else {
        modulesSlider.style.display = '-webkit-box';
    }

    let slickPrevTwo = document.querySelector('.modules__info-btns .slick-prev'),
        slickNextTwo = document.querySelector('.modules__info-btns .slick-next'),
        boxSliderTwo = document.querySelector('.modules__content-slider');

    sliderBox(boxSliderTwo, slickPrevTwo, slickNextTwo, 'card-active', true, 3);


    // Slider five page

    let feedSlider = document.querySelector('.feed__slider');
    if (!slides.length) {} else {
        feedSlider.style.display = '-webkit-box';
    }

    let slickPrevThree = document.querySelector('.button .slick-prev'),
        slickNextThree = document.querySelector('.button .slick-next'),
        boxSliderThree = document.querySelector('.feed__slider');

    sliderBox(boxSliderThree, slickPrevThree, slickNextThree, 'feed__item-active');

    

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

    let cardLink = document.querySelectorAll('.showup__content-slider .card');

    for (let i = 0; i < cardLink.length; i++) {

        cardLink[i].href = `./modules.html`;
        cardLink[i].addEventListener('click', function () {

            sessionStorage.setItem('myKey', i);

        });
    }
    window.onload = function () {
        slideIndex = Number(sessionStorage.getItem('myKey'));
        if (!slides.length) {
            modules.forEach((item) => item.style.display = 'none');
            modules[slideIndex].style.display = 'block';
        }
        slideIndex = slideIndex + 1;
    };


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

    if (!slides.length) {} else {
        input.addEventListener("input", mask);
    }

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

    let inputEmail = document.querySelectorAll('input[type="email"]');

    for (let i = 0; i < inputEmail.length; i++) {
        inputEmail[i].addEventListener("input", function () {
            this.value = inputEmail[i].value.replace(/[^0-9a-zA-Z-@._]+/gi, "");
        });
    }


    //----------------------------------------------------------------
    // Ban letters and signs

    let inputWhen = document.querySelector('input[type="datetime"]');
    if (!slides.length) {} else {
        inputWhen.addEventListener("input", function () {
            this.value = inputWhen.value.replace(/[^0-9/.]+/gi, "");
        });
    }



    //------------------------------------------------------------------------
    // Form
    if (!slides.length) {} else {
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

                (formInputTwo[numElem].value.replace(/\D/g, "").length > 10 || numElem === 0) ? flag = true: flag = false

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
    }


    //------------------------------------------------------------------
    //Video demonstration

    let play = document.querySelectorAll('.play'),
        overlay = document.querySelector('.overlay'),
        closeBtn = document.querySelector('.close'),
        srcSmoll,
        moduleVideoItem = document.querySelectorAll('.module__video-item'),
        lock = document.querySelectorAll('.lock'),
        lockPlay = document.querySelectorAll('.lock__play');



    for (let i = 0; i < play.length; i++) {
        play[i].addEventListener('click', function () {
            overlay.style.display = 'block';
            srcSmoll = play[i].dataset.url.slice(30);
            onYouTubePlayerAPIReady();
        });
    }

    for(let i = 0; i < lockPlay.length; i++ ){            
        lockPlay[i].style.display = 'none';
    }

    function blockVideo() {
        if (!slides.length) {
            for (let i = 1; i < play.length; i = i + 2) {
                play[i].style.pointerEvents = 'none';
            }
        
        for (let i = 1; i < moduleVideoItem.length; i= i+2) {
            moduleVideoItem[i].style.opacity = '.4';
            moduleVideoItem[i].style.filter = 'grayscale(100%)';
            moduleVideoItem[i].children[1].children[0].classList.add('closed');
            moduleVideoItem[i].children[1].children[1].classList.add('attention');
        }
        for (let i = 0; i < lock.length; i++){            
            lock[i].style.display = 'block';
            lockPlay[i].style.display = 'none';
        }}
    }
    blockVideo();

    function unlockVideo() {
        for (let i = 1; i < play.length; i = i + 2) {
            play[i].style.pointerEvents = 'unset';
        }
        for (let i = 1; i < moduleVideoItem.length; i++) {
            moduleVideoItem[i].style.opacity = '1';
            moduleVideoItem[i].style.filter = 'grayscale(0)';
            moduleVideoItem[i].children[1].children[0].classList.remove('closed');
            moduleVideoItem[i].children[1].children[1].classList.remove('attention');
        }
        for (let i = 0; i < lock.length; i++){            
            lock[i].style.display = 'none';
            lockPlay[i].style.display = 'block';
        }
    }



    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
        frame.destroy();
    });


    //---------------------------------------------------------------------------------------------
    // Video Youtube player api

    let tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let frame;

    function onYouTubePlayerAPIReady() {
        frame = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: srcSmoll,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    //autoplay video
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        if (event.data === 0) {
            unlockVideo();
        }
    }

    

    //------------------------------------------------------------------------------------------------
    // Accordion small

    let moduleInfo = document.querySelectorAll('.module__info');
    if (!slides.length) {
        let plusContentModuls = document.querySelectorAll('.plus__content');
        for (let i = 0; i < plusContentModuls.length; i++) {
            let newModuleText = document.createElement('div');
            newModuleText.className = "module__info-show-text";
            newModuleText.innerHTML = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`;
            moduleInfo[i].insertBefore(newModuleText, moduleInfo[i].children[5]);

            plusContentModuls[i].addEventListener('click', function () {
                newModuleText.classList.toggle("text_out");

            });
        }
    }

    //-----------------------------------------------------------------------------------------------
    // File download

    let fileDownload = document.querySelectorAll('.download');

    if (!slides.length) {
        for (let i = 0; i < fileDownload.length; i++) {
            fileDownload[i].setAttribute('download', 'download');
            fileDownload[i].addEventListener('click', function () {
                document.location = '/Hello.zip';
            });
        }
    }

});