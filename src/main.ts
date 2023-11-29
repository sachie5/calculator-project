import "./styles/main.scss";

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
const sqroot = document.querySelector<HTMLAnchorElement>("#sq-root")
const body = document.querySelector<HTMLBodyElement>("body");

if (screenResult === null || numbers === null) {
  throw new Error("Issues with Selector");
}

if (
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
// print number when button is click into the screen
let currentEquation = "";
let currentButtonClicked: string = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if(currentButtonClicked === "="){
      currentEquation = `${number.innerText}`
      screenResult.innerText = currentEquation;
      currentButtonClicked = number.innerText;
    } else {
    currentEquation += `${number.innerText}`;
    screenResult.innerText = currentEquation;
    currentButtonClicked = number.innerText;
  }
});
});

//addition

const addOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  } else if(currentButtonClicked === "="){
    return currentEquation;
  } else {
    currentEquation += ` ${addition.innerText} `;
    screenResult.innerText = currentEquation;
    currentButtonClicked = addition.innerText;
  }
};

addition.addEventListener("click", addOperation);

//subtraction
const subtractOperation = () => {
  if ( 
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  }  else if(currentButtonClicked === "="){
    return currentEquation;
  }else {
    currentEquation += ` ${subtraction.innerText} `;
    screenResult.innerText = currentEquation;
    currentButtonClicked = subtraction.innerText;
  }
};

subtraction.addEventListener("click", subtractOperation);

//multiplication
const multiplyOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  }  else if(currentButtonClicked === "="){
    return currentEquation;
  } else {
    currentEquation += ` * `;
    screenResult.innerText = currentEquation;
    currentButtonClicked = multiplication.innerText;
  }
};

multiplication.addEventListener("click", multiplyOperation);

//division
const divideOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  }  else if(currentButtonClicked === "="){
    return currentEquation;
  } else {
    currentEquation += ` / `;
    screenResult.innerText = currentEquation;
    currentButtonClicked = division.innerText;
  }
};

division.addEventListener("click", divideOperation);

//decimal

const decimalOperation = () => {
  if (
    currentButtonClicked === "+" ||
    currentButtonClicked === "-" ||
    currentButtonClicked === "/" ||
    currentButtonClicked === "*"
  ) {
    return currentEquation;
  } else {
    currentEquation += `${decimal.innerText}`;
    screenResult.innerText = currentEquation;
    currentButtonClicked = decimal.innerText;
  }
};

decimal.addEventListener("click", decimalOperation);

// positive and negative
const negativeOrPositive = () => {
  if(Number.isNaN(parseFloat(currentEquation) * -1)) {
   return screenResult.innerText = "";
  }  else if(currentButtonClicked === "="){
    return currentEquation;
  } else {
  screenResult.innerText = `${parseFloat(currentEquation) * -1}`;
  currentEquation = screenResult.innerText;
 }
}
 
 negative.addEventListener("click", negativeOrPositive)

//A/C button clears the screen

const clearOperation = () => {
  currentEquation = " ";
  screenResult.innerText = currentEquation;
};

clear.addEventListener("click", clearOperation);

//percent operation

const percentOperation = () => {
  currentEquation = "Congratulations";
  screenResult.innerText = currentEquation;
  body.style.background = "#4e54c8";
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
