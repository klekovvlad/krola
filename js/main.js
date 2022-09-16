const swiper = new Swiper('.catalog__slider', {
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        560: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

const swiperFeedback = new Swiper('.feedback__slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

let time = 3131;
const timer = document.querySelector('.timer__main');
const minBlock = document.querySelector('.timer__min');
const secBlock = document.querySelector('.timer__sec');

setInterval(updateTimer, 1000);

function updateTimer() {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? '0' + sec:
    sec;
    minBlock.innerHTML = min;
    secBlock.innerHTML = sec;
    time--;
};

const menuButton = document.querySelector('.header__main-links');
const menu = document.querySelector('.header__main-links > ul');
const menuLinks = document.querySelectorAll('.header__main-links > ul > li > a');
const lineButton = document.querySelectorAll('.header__main-links > span');

function closeAnimate() {
    lineButton[0].classList.toggle('top');
    lineButton[1].classList.toggle('middle');
    lineButton[2].classList.toggle('bottom');
}

menuButton.addEventListener('click', (event) => {
    menu.classList.toggle('menu-open');
    closeAnimate();
});
menu.addEventListener('click', (event) => {
    if(event.target = '.header__main-links > ul > li > a') {
        menu.classList.toggle('menu-open'); 
        event.stopPropagation();
        closeAnimate();
    }
})

