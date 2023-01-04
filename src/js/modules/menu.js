const burger = document.querySelector('.header__burger')
const plate = document.querySelector('.plate')

export default {
    isOpen: false,
    open() {
        burger.classList.add('header__burger_active')
        plate.classList.add('plate_active')
        this.isOpen = true
    },
    close() {
        burger.classList.remove('header__burger_active')
        plate.classList.remove('plate_active')
        this.isOpen = false
    }
}