export default class Modal {
    DURATION_ANIMATION = 600
    body = document.querySelector('body')
    isOpen = false
    modal
    modalBody
    btnClose
    btnOpen

    constructor(nameModal) {
        this.nameModal = nameModal
        this.#setBtnOpen()
        this.#setModal()
        this.#setModalBody()
        this.#setModalClose()
        this.#addListenerOfBtnOpen()
        this.#addListenersClose()
    }

    open() {
        if(this.isOpen) return

        this.#addPaddingContainers()
        this.modal.classList.add('active')
        this.body.classList.add('lock')
        this.isOpen = true
    }

    close() {
        this.modal.classList.remove('active')
        setTimeout(() => {
            this.#removePaddingContainers()   
            this.body.classList.remove('lock')
        }, this.DURATION_ANIMATION)
        this.isOpen = false
    }

    #setBtnOpen() {
        const pattern = `[href=${this.nameModal}]`

        if(document.querySelector(pattern)) {
            this.btnOpen = document.querySelector(pattern)
        }
    }

    #setModal() {
        if(document.getElementById(this.nameModal)) {
            this.modal = document.getElementById(this.nameModal)
        }
    }

    #setModalBody() {
        if(document.querySelector('.modal__body')) {
            this.modalBody = document.querySelector('.modal__body')
        }
    }

    #setModalClose() {
        if(this.modal.querySelector('.modal__close')) {
            this.btnClose = this.modal.querySelector('.modal__close')
        }
    }

    #addListenerOfBtnOpen() {
        this.btnOpen.addEventListener('click', (event) => {
            event.preventDefault()
            this.open()
        })
    }

    #addListenersClose() {
        this.btnClose.addEventListener('click', () => {
            this.close()
        })

        this.modal.addEventListener('click', (event) => {
            if(this.modal === event.target || this.modalBody === event.target) {
                this.close()
            }
        })

        document.addEventListener('keydown', (event) => {
            if(this.isOpen && event.code === 'Escape') {
                this.close()
            }
        })
    }

    #addPaddingContainers() {
        const widthScroll = window.innerWidth - document.documentElement.clientWidth
        this.body.parentElement.style.marginRight = widthScroll + 'px'
    }
    
    #removePaddingContainers() {
        this.body.parentElement.style.marginRight = '0px'
    }
}
