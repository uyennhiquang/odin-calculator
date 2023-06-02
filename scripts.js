const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = 0;
let num2 = 0;
let operator = '+'

const operate = function (num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-': {
            return subtract(num1, num2);
            break;
        }
        case '*': {
            return multiply(num1, num2);
            break;
        }
        case '÷':
        case '/': {
            return divide(num1, num2);
        }
    }
}
