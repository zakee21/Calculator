//add
const add = function(a, b) {
	return a + b;
};
//subtract
const subtract = function(a, b) {
	return a - b;
};
//multiply
const multiply = function(a, b) {
    return a * b;
    //return array.reduce((total, current) => total * current);
  };
//divide
const divide = function(a, b) {
    return a / b;
}

// console.log(add(6, 7));
// console.log(subtract(6, 7));
// console.log(multiply(6, 7));
// console.log(divide(6, 7));


//take display values and store them so that they can be used for calculator operations
//IDEa: maybe can store them in an array: ex: values = [2,+,5]
    //Might have to first create empty array.
let displayValues = [];

//Clicking button changes display to each button's text value
let display = document.getElementById('display');
let btns = document.querySelectorAll('button');
for (i of btns) {
    i.addEventListener('click', 
    function () {
        display.innerText = this.innerText;
        displayValues.push(this.innerText);
        console.table(displayValues);
    });
}

//Clicking 'c' button clears the display
document.getElementById('clear').addEventListener('click', function() {
    display.innerText = '';
    displayValues.length = 0;
    console.table(displayValues);
});



let a = displayValues[0];
let op = displayValues[1];
let b = displayValues[2];

let operate = function (a, op, b) {
    switch(a, op, b){
        case '+': {
            let answer = add(a, b);
            console.log (a, '+', b, '=', answer);
            break;
        }
        case '-': {
            break;
        }
        case 'x': {
            break;
        }
        case '/': {
            break;
        }        
        default: {
            console.log('ERROR 404');
        }
    }
}