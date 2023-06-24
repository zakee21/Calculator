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


let a
let op
let b

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