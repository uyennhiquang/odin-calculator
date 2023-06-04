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
  [answer] = nums;

  console.log(nums);
  console.log(answer);

  if (!(isNaN(answer)) && answer !== Infinity) return answer;
  else return 'stinky baka';
}

// DOM
const displayValueHTML = document.getElementById("calculator-display");
const buttons = document.querySelectorAll("button");
const displayErrorHTML = document.getElementById("calculator-display-error");

let displayValue = "";
let nums = [];
let operators = [];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buttonValue = buttons[i].innerHTML;
    switch (buttonValue) {
      case "C":
        displayValue = "";
        displayValueHTML.innerHTML = "";
        displayErrorHTML.innerHTML = "";
        nums = [];
        break;

      case "=":
        let spaceRemovedDisplay = displayValue.replaceAll(" ", "");
        nums = spaceRemovedDisplay.split(/[+\-*\÷]/).filter(Boolean);
        operators = [...spaceRemovedDisplay].filter((a) =>
          ["+", "-", "*", "÷"].includes(a)
        );
        
        // Check if the last character is an operator sign; operate if it's otherwise
        if (!["+", "-", "*", "÷"].includes(displayValue[displayValue.length - 1])) {
            displayValue = String(calc(nums, operators));

            if (!isNaN(displayValue))
              displayValueHTML.innerHTML = displayValue;
            else
              displayErrorHTML.innerHTML = displayValue;
        }
        break;

      // Prevents user from entering an operator or decimal if the last character is an operator 
      case "+": case "-": case "*": case "÷":
        if (!["+", "-", "*", "÷"].includes(displayValue[displayValue.length - 1])) {
          displayValue += `${buttonValue}`;
          displayValueHTML.innerHTML = displayValue;
        }
        break;

      case ".":
        if (!(displayValue[displayValue.length - 1] === ".")) {
          displayValue += `${buttonValue}`;
          displayValueHTML.innerHTML = displayValue;
        }
        break;

      default:
        displayValue += `${buttonValue}`;
        displayValueHTML.innerHTML = displayValue;
    }
  });
}
