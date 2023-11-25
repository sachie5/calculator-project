import './main.scss'

/* // functions



3) equals will print the result
4) A/C clears the screen
 */
const screen = document.querySelector<HTMLDivElement>(".calc__screen");
const numbers = document.querySelectorAll<HTMLAnchorElement>(".number");

if(screen === null || numbers === null){
  throw new Error ("Issues with Selector")
};


// 1) print number when button is click into the screen

numbers.forEach(number => {
  number.addEventListener("click", () => {
  return screen.textContent += `${number.innerHTML}`; 
  }) 
 });

// 2) operations mean they will do that action 

const clear = document.querySelector<HTMLAnchorElement>("#AC");
const addition = document.querySelector<HTMLAnchorElement>("#add");
const subtraction = document.querySelector<HTMLAnchorElement>("#subtract");
const multiplication = document.querySelector<HTMLAnchorElement>("#multiply");
const division = document.querySelector<HTMLAnchorElement>("#divide");
const equals = document.querySelector<HTMLAnchorElement>("#equals");
const decimal = document.querySelector<HTMLAnchorElement>("#decimal-point");

if(!clear || !addition || !subtraction || !multiplication || !division || !equals ||!decimal){
  throw new Error ("Issues with Selector")
};

//addition

const addOperation = () => {
  screen.textContent += "+";
}

addition.addEventListener ("click", addOperation);

//subtraction
const subtractOperation = () => {
  screen.textContent += "-";
}

subtraction.addEventListener ("click", subtractOperation);

//multiplication
const multiplyOperation = () => {
  screen.textContent += "x";
}

multiplication.addEventListener ("click", multiplyOperation);

//division
const divideOperation = () => {
  screen.textContent += "÷";
}

division.addEventListener ("click", divideOperation);

//equals
const equalsOperation = () => {
  screen.innerHTML = screen.innerHTML;
}

equals.addEventListener ("click", equalsOperation);

//A/C

const clearOperation = () => {
  screen.innerHTML = "";
}

clear.addEventListener ("click", clearOperation);

//decimal

const decimalOperation = () => {
  screen.innerHTML = ".";
}

decimal.addEventListener ("click", decimalOperation);