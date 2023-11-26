import './main.scss'

// functions

const screen = document.querySelector<HTMLDivElement>(".calc__screen");
const numbers = document.querySelectorAll<HTMLAnchorElement>(".number");

if(screen === null || numbers === null){
  throw new Error ("Issues with Selector")
};


// print number when button is click into the screen

numbers.forEach(number => {
  number.addEventListener("click", () => {
  return screen.innerHTML += Number(number.innerHTML); 
  }) 
 });

// 2) operations mean they will print operation onto the screen

const clear = document.querySelector<HTMLAnchorElement>("#AC");
const addition = document.querySelector<HTMLAnchorElement>("#add");
const subtraction = document.querySelector<HTMLAnchorElement>("#subtract");
const multiplication = document.querySelector<HTMLAnchorElement>("#multiply");
const division = document.querySelector<HTMLAnchorElement>("#divide");
const equals = document.querySelector<HTMLAnchorElement>("#equals");
const decimal = document.querySelector<HTMLAnchorElement>("#decimal-point");
const negative = document.querySelector<HTMLAnchorElement>("#posneg")

if(!clear || !addition || !subtraction || !multiplication || !division || !equals ||!decimal || !negative){
  throw new Error ("Issues with Selector")
};

//addition

const addOperation = () => {
  screen.innerHTML += " + ";
}

addition.addEventListener ("click", addOperation);

//subtraction
const subtractOperation = () => {
  screen.innerHTML += " - ";
}

subtraction.addEventListener ("click", subtractOperation);

//multiplication
const multiplyOperation = () => {
  screen.innerHTML += " * ";
}

multiplication.addEventListener ("click", multiplyOperation);

//division
const divideOperation = () => {
  screen.innerHTML += " / ";
}

division.addEventListener ("click", divideOperation);

//decimal

const decimalOperation = () => {
  screen.innerHTML += ".";
}

decimal.addEventListener ("click", decimalOperation);

//equals
const equalsOperation = () => {
  screen.innerHTML =  screen.innerHTML;
}

equals.addEventListener ("click", equalsOperation);

//A/C button clears the screen

const clearOperation = () => {
  screen.innerHTML = "";
}

clear.addEventListener ("click", clearOperation);


//negative and positive

/* const positiveOrNegative = () => {
  if (Number(screen.innerHTML) >= 0){
    screen.innerHTML = `-${screen.innerHTML}`
    } else {
    screen.innerHTML = `${screen.innerHTML}`;
  }
}

negative.addEventListener("click", positiveOrNegative); */