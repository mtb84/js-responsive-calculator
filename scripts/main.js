'use stict'

const operatorButtons = document.querySelectorAll(`.operator`); 
const numberButton = document.querySelectorAll(`.number`)
const decimal = document.querySelector(`.decimal`)
const equalSign = document.querySelector(`.equal-sign`);
const percent = document.querySelector(`.percent`);
const clear = document.querySelector(`.clear`);
const calculatorKeys = document.querySelectorAll(`calculator-keys`);
const calculatorScreen = document.querySelector(`.calculator-screen`)

const calculation = [];

const pushNumber = function (event) {
    return alert(event.target.value);
}

numberButton.forEach;
    function button() {
    addEventListener(`click`, pushNumber)
};
button();

operatorButtons.forEach;
    function button() {
    addEventListener(`click`, pushNumber)
};
button();
