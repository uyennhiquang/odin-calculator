const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1 = 0;
let num2 = 0;
let operator = "+";

const operate = function (num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-": {
      return subtract(num1, num2);
      break;
    }
    case "*": {
      return multiply(num1, num2);
      break;
    }
    case "÷":
    case "/": {
      return divide(num1, num2);
    }
  }
};

const calc = function (nums, operators) {
  while (operators.length > 0) {
    let num1 = Number(nums.shift());
    let num2 = Number(nums.shift());
    let operator = operators.shift();
    nums.unshift(operate(num1, num2, operator));
  }
  return nums[0];
}

// DOM
let displayValue = "";
let nums = [];
let operators = [];

const displayValueHTML = document.getElementById("calculator-display");

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buttonValue = buttons[i].innerHTML;
    switch (buttonValue) {
      case "C":
        displayValue = "";
        displayValueHTML.innerHTML = "";
        nums = [];
        break;

      case "=":
        let spaceRemovedDisplay = displayValue.replaceAll(" ", "");
        nums = spaceRemovedDisplay.split(/[+\-*\÷]/);

        operators = [...spaceRemovedDisplay].filter((a) =>
          ["+", "-", "*", "÷"].includes(a)
        );

        console.log(calc(nums, operators));
        console.log(nums);
        console.log(operators);
        break;

      default:
        displayValue += `${buttonValue} `;
        displayValueHTML.innerHTML = displayValue;
    }
  });
}
