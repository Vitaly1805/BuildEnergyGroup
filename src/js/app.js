import * as flsFunctions from "./modules/functions.js"
import * as animation from "./modules/animation.js"


import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation,Pagination]);
const swiperObject = new Swiper('.swiper-object', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 9,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-object__button_next',
        prevEl: '.swiper-object__button_prev',
    },
});

const swiperObjectInfo = new Swiper('.swiper-object-info', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-object__button_next',
        prevEl: '.swiper-object__button_prev',
    },
});