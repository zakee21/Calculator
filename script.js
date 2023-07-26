const add = function(a, b) {
	return a + b;
};
const subtract = function(a, b) {
	return a - b;
};
const multiply = function(a, b) {
    return a * b;
  };
const divide = function(a, b) {
    return a / b;
}

let displayValues = [];
let answer;

//populate display by clicking number buttons
let display = document.getElementById('display');
let numberBtns = document.querySelectorAll('.number');
for (i of numberBtns) {
    i.addEventListener('click', function (numberBtns) {
        if(display.innerText == answer) {
            display.innerText = '';
        }
        display.innerText += this.innerText;
    });
}

//pushing operator button stores the previous numbers into the array.
    //allows user to chain multiple equations
let operatorBtns = document.querySelectorAll('.operator')
for (i of operatorBtns) {
    i.addEventListener('click',
    function () {
        displayValues.push(display.innerText);
        displayValues.push(this.innerText);
        display.innerText = '';
        let a = Number(displayValues[0]);
        let op = displayValues[1];
        let b = Number(displayValues[2]);
        if (displayValues.length == 4) {
            switch(op) {
                case '+': {
                    displayValues.length = 0;
                    answer = add(a, b)
                    display.innerText = Math.round(answer * 1000000)/1000000;
                    displayValues.push(answer);
                    displayValues.push(this.innerText);
                    break;
                }
                case '-': {
                    displayValues.length = 0;
                    answer = subtract(a, b);
                    display.innerText = Math.round(answer * 1000000)/1000000;
                    displayValues.push(answer);
                    displayValues.push(this.innerText);
                    break;
                }
                case 'x': {
                    displayValues.length = 0;
                    answer = multiply(a, b);
                    display.innerText = Math.round(answer * 1000000)/1000000;
                    displayValues.push(answer);
                    displayValues.push(this.innerText);
                    break;
                }
                case '/': {
                    displayValues.length = 0;
                    answer = divide(a, b);
                    display.innerText = Math.round(answer * 1000000)/1000000;
                    displayValues.push(answer);
                    displayValues.push(this.innerText);
                    break;
                } }
        };
        //ERROR message if user divides by 0
        if(op === '/' && (b === 0 || b === '0')) {
            display.innerText ='LOL CAN\'T DIVIDE BY 0';
        }
        //Prevents duplicating final answer in array and
            //allows user to use displayed number as part of next equation
        if (displayValues[1] == '=') {
            displayValues.length = 0;
        }
    })
}

//Clicking 'c' button clears the display and deletes all array elements
document.getElementById('clear').addEventListener('click', function() {
    display.innerText = '';
    displayValues.length = 0;
});
