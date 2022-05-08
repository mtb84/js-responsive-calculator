'use stict'


const numberButton = document.querySelectorAll(`.number`);


console.log(numberButton);

for(let i = 0; i < numberButton.length; i++)
numberButton[i].addEventListener('click', function() {
console.log(`Button clicked`);

});