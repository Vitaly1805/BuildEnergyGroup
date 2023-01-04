/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}


//Функция установки длины верхней линии input
export function setWidthLabels() {
    let inputs = document.querySelectorAll('._input')
    let labels = document.querySelectorAll('._label')
    let lines = document.querySelectorAll('._line')
    const widthAfter = 15

    inputs.forEach((input, index) => {
        const widthInput = input.offsetWidth - (input.clientLeft * 2)
        const widthLabel = labels[index].offsetWidth

        lines[index].style.width = widthInput - widthLabel - widthAfter + 'px'
    })
}