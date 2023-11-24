import './main.scss'

/* // functions

1) print number when button is click into the screen
2) operations mean they will do that action 
3) equals will print the result
4) A/C clears the screen
 */
const screen = document.querySelector<HTMLDivElement>(".calc__screen");
const numbers = document.querySelectorAll<HTMLAnchorElement>(".number");

if(screen === null || numbers === null){
  throw new Error ("Issues with Selector")
};
numbers.forEach(number => {
  number.style.color = "white";
 });


const printButtonNumber = (event: Event) => {
  const buttonIsClicked = event.currentTarget as HTMLAnchorElement;
  
}



