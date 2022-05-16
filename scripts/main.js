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
const calculate = function (event) {
    return alert(event.target.value);
}
const pushNumber = function (event) {
    return alert(event.target.value);
}

// math function 

const operators = {
    "+": function (num1, num2) {
           return num1 + num2;
         },
    "-": function (num1, num2) {
           return num1 - num2;
         },
    "*": function (num1, num2) {
           return num1 * num2;
         },
    "/": function (num1, num2) {
           return num1 / num2;
         },
    "%": function (num1, num2) {
           return num1 % num2;
         },
  };



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
