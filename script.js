
let display = document.querySelector(".display h2");

function add(num) {
    display.innerText = display.textContent + num
}

function clean() {
    display.innerText = ""
}

function calcular() {
    if (display.textContent) {
        display.innerText = eval(display.textContent)
    } else {
        display.innerText = 0
    }
}