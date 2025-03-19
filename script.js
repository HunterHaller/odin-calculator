let numberA = "";
let numberB = "";
let operatingA = 0;
let operatingB = 0;
let operator = "";
const allDigits = "1234567890";
const allOps = "+-*/"
let defaultZero = true;

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

function clearDisplay(){
    document.querySelector("#display").textContent = "";
}

function updateDisplay(newNum){
    if (defaultZero){
        console.log("First number being added, clearing default zero...")
        defaultZero = false;
        clearDisplay();
    }
    document.querySelector("#display").textContent += newNum;
}

console.log(operate(2, "+", 2))
console.log(operate(2, "-", 2))
console.log(operate(2, "*", 2))
console.log(operate(2, "/", 2))

let operatorButtons = document.querySelector("#calcBody");

operatorButtons.addEventListener("click", (event) => {
    let target = event.target;
    console.log("You clicked " + target.id)

    if (target.id == "clear"){
        clearDisplay();
        updateDisplay(0)
        numberA = "";
        numberB = "";
        operator = "";
        defaultZero = true;
        console.log("Display and all variables reset!")
    } 
    else if ((target.id == "0") && defaultZero){
        console.log("defaultZero still active, ignoring additional zeroes.")
    } 
    else if (allDigits.includes(target.id)){
        console.log("Button clicked is a digit!")

        if (!operator){
            numberA += target.id;
            console.log("numberA is now " + numberA + " with type " + typeof numberA)
        } else if (operator){
            if (!numberB){
                clearDisplay();
            }
            numberB += target.id;
            console.log("numberB is now " + numberB + " with type " + typeof numberB)
        }

        updateDisplay(target.id)
    } 
    else if ((allOps.includes(target.id)) && !defaultZero){
        operator = target.id;
        console.log("Operator is hot! It's " + operator + " with type " + typeof operator)
    } 
    else if ((allOps.includes(target.id)) && defaultZero){
        console.log("ERROR: Operator clicked, but default zero not cleared! No operator assigned.")
    } 
    else if (target.id == "="){
        if ((numberA) && (operator) && (numberB)){
            console.log("Time to operate!")
            clearDisplay();
            operatingA = parseInt(numberA);
            operatingB = parseInt(numberB);
            let resultEquals = operate(operatingA, operator, operatingB);
            console.log("Result: " + resultEquals)
            numberA = resultEquals;
            numberB = "";
            operator = "";

            updateDisplay(resultEquals);
        } else{
            console.log("ERROR, conditions not met!")
        }
        
    }
})