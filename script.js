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

// let a = Number(displayValues[0]);
// let op = displayValues[1];
// let b = Number(displayValues[2]);

//Clicking the '=' button runs the operate function, this function is used within the operate function

//Self: values for a and b are showing undefined, I think their values are not being passed.

function operate() {
    let a = Number(displayValues[0]);
    let op = displayValues[1];
    let b = Number(displayValues[2]);
    switch(op) {
        case '+': {
            display.innerText = add(a, b);
            displayValues.length = 0;
            break;
        }
        case '-': {
            display.innerText = subtract(a, b);
            displayValues.length = 0;
            break;
        }
        case 'x': {
            display.innerText = multiply(a, b);
            displayValues.length = 0;
            break;
        }
        case '/': {
            display.innerText = divide(a, b);
            displayValues.length = 0;
            break;
        }        
        default: {
            display.innerText = 'ERROR 404!';
            displayValues.length = 0;
        }
    }
}
document.getElementById('operate').addEventListener('click', operate);