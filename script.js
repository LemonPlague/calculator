//-------------VARIABLES-------------

let runningTotal = 0;
let secondNumber = 0;
let operator = '';
let buttonContent = [];
let rowCounter = 0;
const container = document.querySelector('#buttonHolder');
const displayBox = document.querySelector('#displayBox');
const liveUpdateBox = document.querySelector('#liveUpdate');

//-------------PAGE SETUP-----------------
PopulatePage();
//--------------FUNCTIONS-----------------

function PopulatePage() {
    //populate calculator button grid
    for (let rowCounter = 0; rowCounter < 5; rowCounter++) {        
        let row = document.createElement('div');
        row.id = `row${i}`;
        row.setAttribute(`class`, `gridRows`);
        container.appendChild(row);
        for (let x = 0; x < 4; x++) {            
            let button = document.createElement('button');
            button.setAttribute(`class`, `rowButton`);
            SetButtonText(button, rowCounter, x);
            SetButtonListeners(button);
            row.appendChild(button);
        }
    }    
}

//populate text content for buttons
function SetButtonText(button, rowCounter, buttonPlacement) {
    if (rowCounter == 0) {
        buttonContent = ['AC', 'C', '%', '÷'];
    } else if (rowCounter == 1) {
        buttonContent = ['7', '8', '9', '×']; 
    } else if (rowCounter == 2) {
        buttonContent = ['4', '5', '6', '-'];
    } else if (rowCounter == 3) {
        buttonContent = ['1', '2', '3', '+'];
    } else if (rowCounter == 4) {
        buttonContent = ['AC', '0', '.', '='];
    }
    button.textContent = buttonContent[buttonPlacement]; 
}

//Assign function to each button push
function SetButtonListeners(button) {
    button.addEventListener("click", (event) => {    

    
    });
}


//-------------MATH FUNCTIONS-------------

function Addition(a, b) {
    return a + b;
}

function Subtraction(a, b) {
    return a - b;
}

function Multiplication(a, b) {
    return a * b;
}

function Division(a, b) {
    return a / b;
}

function operations(a, b, sign) {
    const operators = ['+', '-', '*', '/'];
    operators.forEach((operator) => {
        if (sign == '+') {
            Addition(a, b);
        } else if (sign == '-') {
            Subtraction(a, b);
        } else if (sign == '*') {
            Multiplication(a, b);
        } else if (sign == '/') {
            Division(a, b);
        }
    });
}