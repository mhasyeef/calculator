let a = "";
let b = "";
let operator;
let operated = false;
let answer;
const display = document.getElementById('display');
const buttons = document.querySelectorAll('#button');

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

function operate(a, b, operator){
  if (operator === "+"){
    return add(a, b);
  } else if(operator === "-"){
    return subtract(a, b);
  } else if(operator === "*"){
    return multiply(a, b);
  } else if(operator === "/"){
    return divide(a, b);
  }
}

// buttons.forEach((btn => {

// }))

//number buttons
const one = document.getElementById('one');
one.addEventListener('click', () => {
  if(operated == false){
    a += "1";   
    display.textContent = a;
  }else{
    b += "1";
    display.textContent = b;
  } 
});

const two = document.getElementById('two');
two.addEventListener('click', () => {
  if(operated == false){
    a += "2";   
    display.textContent = a;
  }else{
    b += "2";
    display.textContent = b;
  } 
});

const three = document.getElementById('three');
three.addEventListener('click', () => {
  if(operated == false){
    a += "3";   
    display.textContent = a;
  }else{
    b += "3";
    display.textContent = b;
  }
});

const four = document.getElementById('four');
four.addEventListener('click', () => {
  if(operated == false){
    a += "4";   
    display.textContent = a;
  }else{
    b += "4";
    display.textContent = b;
  }
});

const five = document.getElementById('five');
five.addEventListener('click', () => {
  if(operated == false){
    a += "5";   
    display.textContent = a;
  }else{
    b += "5";
    display.textContent = b;
  }
});

const six = document.getElementById('six');
six.addEventListener('click', () => {
  if(operated == false){
    a += "6";   
    display.textContent = a;
  }else{
    b += "6";
    display.textContent = b;
  }
});

const seven = document.getElementById('seven');
seven.addEventListener('click', () => {
  if(operated == false){
    a += "7";   
    display.textContent = a;
  }else{
    b += "7";
    display.textContent = b;
  }
});

const eight = document.getElementById('eight');
eight.addEventListener('click', () => {
  if(operated == false){
    a += "8";   
    display.textContent = a;
  }else{
    b += "8";
    display.textContent = b;
  }
});

const nine = document.getElementById('nine');
nine.addEventListener('click', () => {
  if(operated == false){
    a += "9";   
    display.textContent = a;
  }else{
    b += "9";
    display.textContent = b;
  }
});

const zero = document.getElementById('zero');
zero.addEventListener('click', () => {
  if(operated == false){
    a += "0";   
    display.textContent = a;
  }else{
    b += "0";
    display.textContent = b;
  }
});

//reset
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  display.textContent = "0";
  a = ""; 
  b = "";
  operated = false;
  console.log(a);
  console.log(b);
});

// function mutlipleOperations(a, b, operate){
//   b += 
// }

//operators
let moreThanTwo = false;
const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
  if(!(b) == false){  //if second number has already been keyed in
    a = parseInt(a); 
    b = parseInt(b);
    answer = operate(a, b, operator); //to calculate the first operation first
    display.textContent = answer;   //to show the answer on display
    moreThanTwo = true;
    operator = true;
    a = answer;

    console.log("answer is: " + answer)
    console.log("first sum operation is: " + a);
    console.log(!(b));
  }else{
    operated = true;
    operator = "+";
    display.textContent = a + " +"
    console.log(!(b));
  }
  
})

const minus = document.getElementById('minus');
minus.addEventListener('click', () => {
  operated = true;
  operator = "-";
  display.textContent = a + " -"
})

const times = document.getElementById('times');
times.addEventListener('click', () => {
  operated = true;
  operator = "*";
  display.textContent = a + " x"
})

const divided = document.getElementById('divide');
divided.addEventListener('click', () => {
  operated = true;
  operator = "/";
  display.textContent = a + " /"
})

const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
  a = parseInt(a); 
  b = parseInt(b);
  answer = operate(a, b, operator);
  display.textContent = answer;
})
