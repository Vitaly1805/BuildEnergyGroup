import * as flsFunctions from "./modules/functions.js"
import * as animation from "./modules/animation.js"
import { Checkbox } from "./modules/checkbox.js";
import menu from './modules/menu.js'
import Modal from './modules/modal.js'
import Inputmask from "maskedinput";
import Swiper, { Navigation, Pagination } from 'swiper';


Swiper.use([Navigation,Pagination]);
const swiperObject = new Swiper('.swiper-object', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 9,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-object__button_next',
        prevEl: '.swiper-object__button_prev',
    },
    allowTouchMove: false
});

const swiperObjectInfo = new Swiper('.swiper-object-info', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-object__button_next',
        prevEl: '.swiper-object__button_prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    allowTouchMove: false
});

const swiperPartner = new Swiper('.swiper-partner', {
    slidesPerView: "auto",
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-partner__button_next',
        prevEl: '.swiper-partner__button_prev',
    }
});

new Checkbox('request-check__my-checkbox', "request-check__label")

//Устанавливаем длину верхней линии input
document.addEventListener("DOMContentLoaded", () => {
    flsFunctions.setWidthLabels()
})
window.addEventListener('resize', () => {
    flsFunctions.setWidthLabels()
})

//Окраска верхних границ при фокусе inputs из модальных окон
const modals = document.querySelectorAll('.modal')

modals.forEach(modal => {
    const requestFormWrappers = modal.querySelectorAll('.request-form__wrapper')
    const inputs = modal.querySelectorAll('.request-form__input')

    inputs.forEach((input, index) => {
        input.addEventListener('focus', () => {
            requestFormWrappers[index].classList.remove('request-form__wrapper_black')
        })

        input.addEventListener('blur', () => {
            requestFormWrappers[index].classList.add('request-form__wrapper_black')
        })
    })
})

//Переключение мобильного меню
const burger = document.querySelector('.header__burger')

burger.addEventListener('click', () => {
    if(menu.isOpen) {
        menu.close()
    } else {
        menu.open()
    }
})

//Переключение отображения мобильной шапки при скролле
let currentPageYOffset = 0 

window.addEventListener('scroll', () => {
    if(window.innerWidth < 992) {
        const headerTop = document.querySelector('.header__top')

        if(window.pageYOffset > currentPageYOffset  && window.pageYOffset > 80  && !menu.isOpen) {
            headerTop.classList.add('header__top_hidden')
        } else {
            headerTop.classList.remove('header__top_hidden')
        }
    }

    currentPageYOffset = window.pageYOffset
});

//Регистрируем модальные окна
new Modal('modal-building')
new Modal('modal-electro-building')
new Modal('modal-supply')
new Modal('modal-electro-supply')
new Modal('modal-design')

//Маска номера телефона
const tels = document.querySelectorAll('.tel')
tels.forEach(tel => {
    let im = new Inputmask("+7 (999) 999 99 99");
    im.mask(tel);
})

//Обработка отправки заявок
const requestModals = document.querySelectorAll('.modal-request')

requestModals.forEach(requestModal => {
    const formSuccess = requestModal.querySelector('.message-form-success')
    const formFail = requestModal.querySelector('.message-form-fail')
    const form = requestModal.querySelector('.request-form')
    const linkTryAgain = requestModal.querySelector('.message-form__try-again')
    const inputName = requestModal.querySelectorAll('input')[0]
    const inputPhone = requestModal.querySelectorAll('input')[1]
    const textarea = requestModal.querySelector('inputtextarea')
    const close = requestModal.querySelector('.request-form__close')

    form.addEventListener('submit', (e) => {
        if(inputName.validity.valid &&  inputPhone.validity.valid) {
            e.preventDefault()
            fetch('https://testurl.com')
            .then(data => {
                formSuccess.classList.add('message-form-success_active')
                inputName.value = ''
                inputPhone.value = ''
                textarea.value = ''
            })
            .catch(err => {
                formFail.classList.add('message-form-fail_active')

                linkTryAgain.addEventListener('click', (e) => {
                    e.preventDefault()
                    formFail.classList.remove('message-form-fail_active')
                })
            })
        }
    })

    close.addEventListener('click', () => {
        formSuccess.classList.remove('message-form_active')
    })
})