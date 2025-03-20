let numberA = "";
let numberB = "";
let operatingA = 0;
let operatingB = 0;
let operator = "";
const allDigits = "1234567890";
const allOps = "+-*/"
let defaultZero = true;
let displayingResult = false;
let decimalized = false;


//OPERATING FUNCTIONS
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


//DISPLAY ADJUSTMENT FUNCTIONS
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

let operatorButtons = document.querySelector("#calcBody");

//CLICK FUNCTIONS
operatorButtons.addEventListener("click", (event) => {
    let target = event.target;
    console.log("You clicked " + target.id)

    //CLEAR
    if (target.id == "clear"){ //Clicking clear any time:
        clearDisplay();
        updateDisplay(0)
        numberA = "";
        numberB = "";
        operator = "";
        displayingResult = false;
        defaultZero = true;
        decimalized = false;
        console.log("Display and all variables reset!")
    } 
    //DIGITS
    //else if ((target.id == "0") && defaultZero){ //Clicking zero before any other inputs:
    //    console.log("defaultZero still active, ignoring additional zeroes.")
    //    defaultZero = false;
    //    numberA = 0;
    //    console.log("DefaultZero cleared, numberA is now 0.")
    //}
    else if (allDigits.includes(target.id)){ //if clicking a digit,

        //CLICKING DIGITS
        if (target.id == "0"){
            if (numberA != "0"){
                console.log("numberA isn't already just zero, so allowing extra zero...")
                numberA += "0";
            } else { //numberA is already zero: 
                console.log("Ignoring additional zero...")
                return;
            }
        } else if (displayingResult == true){ //hitting a number right after getting a result:
            console.log("Getting rid of a previous result!")
            clearDisplay();
            numberA = target.id;
            console.log("numberA is now " + numberA + " with type " + typeof numberA)
        }
        else if ((!operator) && (displayingResult == false)){ //Hitting a number for the first time OR after a clear:
            numberA += target.id;
            console.log("numberA is now " + numberA + " with type " + typeof numberA)
        } 
        else if ((numberA) && (operator)){ //if numberA and operator already set,
            if (!numberB){ //and if there's no second number yet:
                console.log("B not started, clearing display.")
                clearDisplay();
            }
            numberB += target.id; //add to second number
            console.log("numberB is now " + numberB + " with type " + typeof numberB)
        }

        updateDisplay(target.id)
        displayingResult = false;
    } 
    //DECIMAL PLACEMENT
    else if (target.id == "."){
        if ((!operator) && (!numberA.includes("."))){
            console.log("Added decimal to numberA!")
            numberA += "."
            updateDisplay(".")
        } else if ((operator) && (!numberB.includes("."))){
            numberB += "."
            console.log("Added decimal to numberB!")
            updateDisplay(".")
        } else if (defaultZero){
            if (!numberA){
                numberA = "0."
            } else if ((operator) && (numberB)){
                numberB = "0."
            }
            updateDisplay(".")
        }
        else{
            console.log("Active number already has a decimal!")
        }
    }

    //OPERATORS
    else if ((allOps.includes(target.id)) && !defaultZero){
        if (numberB){
            console.log("Second number already started! No operators changed.");
        } else{
            operator = target.id;
            console.log("Operator is hot! It's " + operator + " with type " + typeof operator)
            displayingResult = false;
            //defaultZero = true;
        }
    }
    else if ((allOps.includes(target.id)) && defaultZero){
        console.log("ERROR: Operator clicked, but default zero not cleared! No operator assigned.")
    } 
    //EQUALS / GETTING A RESULT
    else if (target.id == "="){
        if ((numberA) && (operator) && (numberB)){

            if ((operator == "/") && (numberB == "0")){
                console.log("ERROR: Division by zero is illegal!!")
            } else{
                console.log("Time to operate!")
    
                console.log(numberA + " " + operator + " " + numberB)
    
                operatingA = Number(numberA);
                console.log("operatingA = " + operatingA)
                operatingB = Number(numberB);
                console.log("operatingB = " + operatingB)
    
                resultEquals = operate(operatingA, operator, operatingB);
                console.log("Result: " + resultEquals)
                numberA = resultEquals;
                numberB = "";
                operator = "";
                
                clearDisplay();
                updateDisplay(Math.round(resultEquals * 10000) / 10000);
                displayingResult = true;
            }
        } else{
            console.log("ERROR, conditions not met!")
        }
        
    }
    console.log("After this click, decimalized == " + decimalized)
})