let numberA = 0;
let numberB = 0;
let result = 0;
let operator = "";

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

console.log(operate(2, "+", 2))
console.log(operate(2, "-", 2))
console.log(operate(2, "*", 2))
console.log(operate(2, "/", 2))