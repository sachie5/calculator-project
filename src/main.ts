import "./styles/main.scss";

// numbers and screen HTML

const screenResult = document.querySelector<HTMLOutputElement>(".calc__screen");
const numbers = document.querySelectorAll<HTMLAnchorElement>(".number");

if (screenResult === null || numbers === null) {
  throw new Error("Issues with Selector");
}

// operations mean they will print operation onto the screen

const clear = document.querySelector<HTMLAnchorElement>("#AC");
const addition = document.querySelector<HTMLAnchorElement>("#add");
const subtraction = document.querySelector<HTMLAnchorElement>("#subtract");
const multiplication = document.querySelector<HTMLAnchorElement>("#multiply");
const division = document.querySelector<HTMLAnchorElement>("#divide");
const equals = document.querySelector<HTMLAnchorElement>("#equals");
const decimal = document.querySelector<HTMLAnchorElement>("#decimal-point");
const negative = document.querySelector<HTMLAnchorElement>("#posneg");
const percent = document.querySelector<HTMLAnchorElement>("#percent");
const body = document.querySelector<HTMLBodyElement>("body");

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
  !body
) {
  throw new Error("Issues with Selector");
}
// print number when button is click into the screen
let currentEquation = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
   currentEquation += `${number.innerText}`
    console.log(number.innerText);
    screenResult.innerText  = currentEquation;
  });
});

//addition

const addOperation = () => {
if(currentEquation.match(/[+/*-]/)){
  return currentEquation;
} else {
  currentEquation += ` ${addition.innerText} `
  screenResult.innerText = currentEquation;
}
};

addition.addEventListener("click", addOperation);

//subtraction
const subtractOperation = () => {
  if(currentEquation.match(/[+/*-]/)){
    return currentEquation;
  } else {currentEquation += ` ${subtraction.innerText} `
  screenResult.innerText = currentEquation;
}
};

subtraction.addEventListener("click", subtractOperation);

//multiplication
const multiplyOperation = () => {
  if(currentEquation.match(/[+/*-]/)){
    return currentEquation;
  } else {currentEquation += ` * `
  screenResult.innerText = currentEquation;
}
};

multiplication.addEventListener("click", multiplyOperation);

//division
const divideOperation = () => {
  if(currentEquation.match(/[+/*-]/)){
    return currentEquation;
  } else {currentEquation += ` / `
  screenResult.innerText = currentEquation;
}
};

division.addEventListener("click", divideOperation);

//decimal

const decimalOperation = () => {
  if(currentEquation.match(/[+/*-]/)){
    return currentEquation;
  } else {currentEquation += `${decimal.innerText}`
  screenResult.innerText = currentEquation;
}
};

decimal.addEventListener("click", decimalOperation);

//A/C button clears the screen

const clearOperation = () => {
 currentEquation = " ";
  screenResult.innerText = currentEquation;
};

clear.addEventListener("click", clearOperation);

//percent operation

const percentOperation = () => {
  body.style.background= "#4e54c8";
  body.style.background = "-webkit-linear-gradient(to left, #8f94fb, #4e54c8)";
  }
percent.addEventListener("click", percentOperation);

// negative/postive 


//calculating equals

const calculate = (event: Event) => {
  const mathExpression = screenResult.innerText.split(" ");
  let result: number = Number(mathExpression[0]);
  let index = 1;
  /* for (let index = 1; index < mathExpression.length; index++) { */
    while (index < mathExpression.length - 1){
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
        break;
    }
    index += 2;
  }
  currentEquation = `${result}`;
  screenResult.innerText = currentEquation;
  return result;
}


equals.addEventListener("click", calculate);



