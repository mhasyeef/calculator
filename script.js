let a = "";
let b;
let operator;

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(a, b, operator){
  if (operator === "+"){
    return a + b;
  } else if(operator === "-"){
    return a - b;
  } else if(operator === "*"){
    return a * b;
  } else if(operator === "/"){
    return a / b;
  }
}


const display = document.getElementById('display');


const button = document.querySelector('.button');

const one = document.getElementById('one');
one.addEventListener('click', () => {
  a += "1";   
  display.textContent = a;
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
  a += "2";
  display.textContent = a; 
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
  a += "3";
  display.textContent = a;
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
  a += "4";
  display.textContent = a;
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
  a += "5";
  display.textContent = a;
});

const six = document.getElementById('six');
six.addEventListener('click', () => {
  a += "6";
  display.textContent = a;
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
  a += "7";
  display.textContent = a;
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
  a += "8";
  display.textContent = a;
});

const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
  a += "9";
  display.textContent = a;
});

const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
  a += "0";
  display.textContent = a;
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  display.textContent = "0";
  a = ""; //resets display to 0
});



console.log(operate(6, 5, "*"));

console.log(add(2, 4));
console.log(subtract(2, 4));
console.log(multiply(2, 4));
console.log(divide(2, 4));