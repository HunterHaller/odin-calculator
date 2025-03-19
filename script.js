let numberA = 0;
let numberB = 0;
let result = 0;
let operator = "";
const allDigits = "1234567890";
const allOps = "+-*/"

function add(numA, numB){
    return numA + numB;
}

function subtract(numA, numB){
    return numA - numB;
}

function multiply(numA, numB){
    return numA * numB;
}

function divide(numA, numB){
    return numA / numB;
}

function operate(numA, operation, numB){
    switch(operation){
        case "+":
            return add(numA, numB);
            break;
        case "-":
            return subtract(numA, numB);
            break;
        case "*":
            return multiply(numA, numB);
            break;
        case "/":
            return divide(numA, numB);
            break;
        default:
            return "ERROR"
            break;
    }
}

function updateDisplay(newNum){
    document.querySelector("#display").textContent = newNum;
}

console.log(operate(2, "+", 2))
console.log(operate(2, "-", 2))
console.log(operate(2, "*", 2))
console.log(operate(2, "/", 2))

let operatorButtons = document.querySelector("#calcBody");

operatorButtons.addEventListener("click", (event) => {
    let target = event.target;
    console.log("You clicked " + target.id)

    if (allDigits.includes(target.id)){
        console.log("Button clicked is a digit!")
        updateDisplay(target.id)
    } else{
        console.log("Not a digit!")
    }
})