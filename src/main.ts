import "./main.scss";

// numbers and screen HTML

const screen = document.querySelector<HTMLDivElement>(".calc__screen");
const numbers = document.querySelectorAll<HTMLAnchorElement>(".number");

if (screen === null || numbers === null) {
  throw new Error("Issues with Selector");
}

screen.innerHTML = "<p class=result></p>";
const screenResult = document.querySelector<HTMLParagraphElement>(".result");

if (!screenResult) {
  throw new Error("Issues with Selector");
}

// print number when button is click into the screen

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    return (screenResult.innerText += ` ${number.innerText}`);
  });
});

// 2) operations mean they will print operation onto the screen

const clear = document.querySelector<HTMLAnchorElement>("#AC");
const addition = document.querySelector<HTMLAnchorElement>("#add");
const subtraction = document.querySelector<HTMLAnchorElement>("#subtract");
const multiplication = document.querySelector<HTMLAnchorElement>("#multiply");
const division = document.querySelector<HTMLAnchorElement>("#divide");
const equals = document.querySelector<HTMLAnchorElement>("#equals");
const decimal = document.querySelector<HTMLAnchorElement>("#decimal-point");
const negative = document.querySelector<HTMLAnchorElement>("#posneg");

if (
  !clear ||
  !addition ||
  !subtraction ||
  !multiplication ||
  !division ||
  !equals ||
  !decimal ||
  !negative
) {
  throw new Error("Issues with Selector");
}

//addition

const addOperation = () => {
  screenResult.innerText += " + ";
};

addition.addEventListener("click", addOperation);

//subtraction
const subtractOperation = () => {
  screenResult.innerText += " - ";
};

subtraction.addEventListener("click", subtractOperation);

//multiplication
const multiplyOperation = () => {
  screenResult.innerText += " * ";
};

multiplication.addEventListener("click", multiplyOperation);

//division
const divideOperation = () => {
  screenResult.innerText += " / ";
};

division.addEventListener("click", divideOperation);

//decimal

const decimalOperation = () => {
  screenResult.innerText += ".";
};

decimal.addEventListener("click", decimalOperation);

//A/C button clears the screen

const clearOperation = () => {
  screenResult.innerHTML = "";
};

clear.addEventListener("click", clearOperation);

//calculating equals
const mathExpression = screenResult.innerText.split(" ");

const calculate = (event: Event) => {
  const calculateMath = event.currentTarget as HTMLAnchorElement;

  let result: number = Number(mathExpression[0]);
  for (let index = 1; index < mathExpression.length; index++) {
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
  }
  console.log(result);
  return result;
};

equals.addEventListener("click", calculate);

//negative and positive

/* const positiveOrNegative = () => {
  if (Number(screen.innerHTML) >= 0){
    screen.innerHTML = `-${screen.innerHTML}`
    } else {
    screen.innerHTML = `${screen.innerHTML}`;
  }
}

negative.addEventListener("click", positiveOrNegative); */
