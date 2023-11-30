import "./styles/main.scss";
import confetti, { Options } from "canvas-confetti";

// Getting HTML Variables

const screenResult = document.querySelector<HTMLOutputElement>(".calc__screen");
const numbers = document.querySelectorAll<HTMLAnchorElement>(".number");
const clear = document.querySelector<HTMLAnchorElement>("#AC");
const addition = document.querySelector<HTMLAnchorElement>("#add");
const subtraction = document.querySelector<HTMLAnchorElement>("#subtract");
const multiplication = document.querySelector<HTMLAnchorElement>("#multiply");
const division = document.querySelector<HTMLAnchorElement>("#divide");
const equals = document.querySelector<HTMLAnchorElement>("#equals");
const decimal = document.querySelector<HTMLAnchorElement>("#decimal-point");
const negative = document.querySelector<HTMLAnchorElement>("#posneg");
const percent = document.querySelector<HTMLAnchorElement>("#percent");
const sqroot = document.querySelector<HTMLAnchorElement>("#sq-root");
const body = document.querySelector<HTMLBodyElement>("body");

if (numbers === null) {
  throw new Error("Issues with Selectors");
}

if (
  !screenResult ||
  !clear ||
  !addition ||
  !subtraction ||
  !multiplication ||
  !division ||
  !equals ||
  !decimal ||
  !negative ||
  !percent ||
  !body ||
  !sqroot
) {
  throw new Error("Issues with Selector");
}

// Add numbers to screen when button pressed

let currentEquation = "";
let currentButtonClicked: string = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (currentButtonClicked === "=" || currentButtonClicked === "%") {
      currentEquation = `${number.innerText}`;
      screenResult.innerText = currentEquation;
      currentButtonClicked = number.innerText;
    } else {
      currentEquation += `${number.innerText}`;
      screenResult.innerText = currentEquation;
      currentButtonClicked = number.innerText;
    }
  });
});

// Addition operation

const addOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  } else if (currentButtonClicked === "=" || currentButtonClicked === "%") {
    return currentEquation;
  } else {
    currentEquation += ` ${addition.innerText} `;
    screenResult.innerText = currentEquation;
    currentButtonClicked = addition.innerText;
  }
};

addition.addEventListener("click", addOperation);

//Subtraction

const subtractOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  } else if (currentButtonClicked === "=" || currentButtonClicked === "%") {
    return currentEquation;
  } else {
    currentEquation += ` ${subtraction.innerText} `;
    screenResult.innerText = currentEquation;
    currentButtonClicked = subtraction.innerText;
  }
};

subtraction.addEventListener("click", subtractOperation);

//Multiplication

const multiplyOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  } else if (currentButtonClicked === "=" || currentButtonClicked === "%") {
    return currentEquation;
  } else {
    currentEquation += ` * `;
    screenResult.innerText = currentEquation;
    currentButtonClicked = multiplication.innerText;
  }
};

multiplication.addEventListener("click", multiplyOperation);

// Division
const divideOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  } else if (currentButtonClicked === "=" || currentButtonClicked === "%") {
    return currentEquation;
  } else {
    currentEquation += ` / `;
    screenResult.innerText = currentEquation;
    currentButtonClicked = division.innerText;
  }
};

division.addEventListener("click", divideOperation);

// Decimal

const decimalOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*" ||
    currentButtonClicked === "%"
  ) {
    return currentEquation;
  } else {
    currentEquation += `${decimal.innerText}`;
    screenResult.innerText = currentEquation;
    currentButtonClicked = decimal.innerText;
  }
};

decimal.addEventListener("click", decimalOperation);

// Positive and negative numbers
const negativeOrPositive = () => {
  const currentNumbers = screenResult.innerText.split(" ");
  const negNumbers = currentNumbers.map((num, i) => {
    if (!isNaN(Number(num)) && i === currentNumbers.length - 1) {
      return ` ${Number(num) * -1}`;
    } else if (num === "+" || num === "-" || num === "/" || num === "*") {
      return ` ${num} `;
    } else {
      return ` ${num}`;
    }
  });
  currentEquation = negNumbers.join("");
  screenResult.innerText = currentEquation;
};

negative.addEventListener("click", negativeOrPositive);

//A/C button clears the screen
const clearOperation = () => {
  currentEquation = " ";
  screenResult.innerText = currentEquation;
};

clear.addEventListener("click", clearOperation);

//Easter Egg
const percentOperation = () => {
  currentButtonClicked = "%";
  currentEquation = "Congratulations";
  screenResult.innerText = currentEquation;
  const options: Options = {
    particleCount: 100,
    spread: Math.random() * 361,
    angle: Math.random() * 361,
    gravity: 0.5,
    colors: ["#227C9D", "#17C3B2", "#FFCB77", "#FEF9EF", "#FE6D73"],
  };
  return confetti(options);
};

percent.addEventListener("click", percentOperation);

// square root

const squareRoot = () => {
  screenResult.innerText = Math.sqrt(Number(currentEquation)).toString();
};

sqroot.addEventListener("click", squareRoot);

//calculating equals

const calculate = () => {
  console.log(screenResult.innerText);
  const mathExpression = screenResult.innerText.split(" ");
  let result: number = Number(mathExpression[0]);
  let index = 1;
  while (index < mathExpression.length - 1) {
    let operation = mathExpression[index];
    switch (operation) {
      case "+":
        result += Number(mathExpression[index + 1]);
        break;
      case "-":
        result -= Number(mathExpression[index + 1]);
        break;
      case "*":
        result *= Number(mathExpression[index + 1]);
        break;
      case "/":
        result /= Number(mathExpression[index + 1]);
        break;
      default:
        result = 0;
        break;
    }
    index += 2;
  }
  currentEquation = `${result}`;
  currentButtonClicked = equals.innerText;
  screenResult.innerText = currentEquation;
  return result;
};

equals.addEventListener("click", calculate);
