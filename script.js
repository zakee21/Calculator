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
let numberBtns = document.querySelectorAll('.number');
for (i of numberBtns) {
    i.addEventListener('click', 
    function () {
        display.innerText = '';
        display.innerText += this.innerText;
        //displayValues.push(this.innerText);
        console.table(displayValues);
    });
}

//pushing operator button stores the previous numbers into the array.
let operatorBtns = document.querySelectorAll('.operator')
for (i of operatorBtns) {
    i.addEventListener('click',
    function () {
        displayValues.push(display.innerText);
        displayValues.push(this.innerText);
        display.innerText = '';
        console.table(displayValues);
        let a = Number(displayValues[0]);
        let op = displayValues[1];
        let b = Number(displayValues[2]);
        if (displayValues.length == 4) {
            switch(op) {
                case '+': {
                    displayValues.length = 0;
                    display.innerText = add(a, b);
                    displayValues.push(add(a, b));
                    displayValues.push('+');
                    //display.innerText = add(a, b);
                    // console.table(displayValues);
                    // //displayValues.length = 0;
                    // console.table(displayValues);
                    // displayValues.push(add(a, b));
                    // console.table(displayValues);
                    break;
                }
                case '-': {
                    displayValues.length = 0;
                    display.innerText = subtract(a, b);
                    displayValues.push(subtract(a, b));
                    displayValues.push('-');
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
                } }
            // displayValues.length = 0;
            // display.innerText = add(a, b);
            // displayValues.push(add(a, b));
            // displayValues.push('+');
        };
        console.table(displayValues);
    })
}


//Clicking 'c' button clears the display and deletes all array elements
document.getElementById('clear').addEventListener('click', function() {
    display.innerText = '';
    displayValues.length = 0;
    console.table(displayValues);
});

//6/30/23: I need to get the numbers to add dynamically as nums are pushed to array
    //a + b - c - d
    //(a+b) - c = res, res - d = final answer

//Clicking the '=' button runs the operate function
function operate() {
    //UNDO
    //displayValues.push(display.innerText);
    let a = Number(displayValues[0]);
    let op = displayValues[1];
    let b = Number(displayValues[2]);
    switch(op) {
        case '+': {
            displayValues.length = 0;
            display.innerText = add(a, b);
            displayValues.push(add(a, b));
            displayValues.push('+');
            //display.innerText = add(a, b);
            // console.table(displayValues);
            // //displayValues.length = 0;
            // console.table(displayValues);
            // displayValues.push(add(a, b));
            // console.table(displayValues);
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
            display.innerText = '';
            console.table(displayValues);
            displayValues.length = 0;
            console.table(displayValues);
        }
    }
}

document.getElementById('equals').addEventListener('click', operate);