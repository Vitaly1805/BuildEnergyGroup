export class Checkbox {
    myCheckboxes
    myCheckboxClassName
    labeles
    classNameLabel

    constructor(myCheckboxClassName, classNameLabel) {
        this.myCheckboxClassName = myCheckboxClassName
        this.myCheckboxes = document.querySelectorAll('.' + myCheckboxClassName)
        this.classNameLabel = classNameLabel
        this.labeles = document.querySelectorAll('.' + classNameLabel)

        this.#setListener()
        this.#setListenerLabel()
    }

    #setListener() {
        if(this.myCheckboxes.length > 0) {
            this.myCheckboxes.forEach(myCheckbox => {
                myCheckbox.addEventListener('click', () => {
                    myCheckbox.classList.toggle(this.myCheckboxClassName + '_active')
                })
            })
        }     
    }

    #setListenerLabel() {
        if(this.labeles.length > 0) {
            this.labeles.forEach((label, index) => {
                label.addEventListener('click', () => {
                    this.myCheckboxes[index].classList.toggle(this.myCheckboxClassName + '_active')
                })
            })
        }     
    }
}