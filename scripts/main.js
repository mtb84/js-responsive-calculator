'use stict'

const operatorButtons = document.querySelectorAll(`.operator`); 
const numberButton = document.querySelectorAll(`.number`)
const decimal = document.querySelector(`.decimal`)
const equalSign = document.querySelector(`.equal-sign`);
const percent = document.querySelector(`.percent`);
const clear = document.querySelector(`.clear`);
const calculatorKeys = document.querySelectorAll(`calculator-keys`);
const calculatorScreen = document.querySelector(`.calculator-screen`)
const plusMinus = document.querySelector(`.plus-minus`);

equalSign.addEventListener('click', pushEquals);
percent.addEventListener('click', pushPercent);
clear.addEventListener('click', pushClear);

let calculation = [];
let operator;
let shownNumber = 0;
let result;

function calcNumber() {
    if (calculation.length === 3) {
      calculate();
    } else if (calculation.length > 3) {
     }
  };

  function pushNumber(num) {
    if (calculatorScreen.value === '0') {
        calculatorScreen.value = num.target.value;
    } else {
        calculatorScreen.value = calculatorScreen.value + num.target.value;
    };
  };

  function pushNonNumber(operator) {
    shownNumber = Number(calculatorScreen.value);
    if (result !== shownNumber && shownNumber !== 0) {
      calculation.push(shownNumber)
      calcNumber()
    };
    calculation.push(operator)
    calculatorScreen.value = '';
    calcNumber();
  }

  function pushOperator(op) {
	const operator = op.target.value;
  pushNonNumber(operator);
  }

  function pushPercent(perc) {
    const operator = perc.target.value;
    pushNonNumber(operator);
  }

  function pushEquals() {
    if (calculation.length === 2) {
        shownNumber = Number(calculatorScreen.value);
      calculation.push(shownNumber);
      calcNumber();
    };
  }

  function pushClear() {
    calculation = [];
    result = 0;
    calculatorScreen.value = '0';
  }  

  function calculate() {
    let num1 = Number(calculation[0]);
    const operatorEntered = calculation[1];
    let num2 = Number(calculation[2]);
    result = operators[operatorEntered](num1, num2);
    calculatorScreen.value = result;
    calculation = [result];
  };


  for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener('click', pushNumber);
  };
  
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', pushOperator);
  };


const operators = {
    '+': function (num1, num2) {
           return num1 + num2;
         },
    '-': function (num1, num2) {
           return num1 - num2;
         },
    '*': function (num1, num2) {
           return num1 * num2;
         },
    '/': function (num1, num2) {
           return num1 / num2;
         },
    '%': function (num1, num2) {
           return num1 % num2;
         },

  };
