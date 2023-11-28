# Calculator Project

My project is to create a calculator using HTML, CSS and Typescript.

## Table of Contents

1. HTML Structure
2. SCSS Structure
3. CSS Grid and Flexbox
4. TypeScript

## HTML Structure

The HTML Structure is made of head tag with links to the scss as well as the different font I added.

The script link is in the body before the main tag.

Themain tag contains a div which is the screen of the calculator and a div that containes the buttons of the calculator - anchor tags within p tags.

## SCSS structure

I have a SCSS for my variables(colours and font) , one for my main (general structure of page) and one for the code for the calculator.

## CSS Grid and Flexbox

The buttons are arranged on the calculator using a CSS grid.

I have utilised flexbox to for the container of the calculator, screen and to center the text within the buttons.

## Typescript


The first section is getting the screen and numberinto variables and adding a p tag into the screen for the text to come.

I used querySelectorAll and .foreach to make the button print the text on the screen when clicked.

For the operations, I stored the element in variables using querySelctor and used .addEventListener to print on the screen using the function.

My best code is definitely the calculate function which took a few days to get to function correctly:

const calculate = (event: Event) => {
  const mathExpression = screenResult.innerText.split(" ");
  console.log(mathExpression);
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
}

I created a switch statement as it allowed me to see the conditionals better than an if else and allow me to break/stop once a certain operation was found. I used a while loop as I know that it would stop once it reached the allocated condition and the length of the array would vary depending on the user input. The part that took me longer to figure out was the presences of currentEqaution which begins as an empty string before any functions and stores every button's innerText when pressed.