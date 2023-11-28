//-------------VARIABLES-------------

let runningTotal = 0;
let secondNumber = 0;
let operator = '';
let buttonText = [];
const container = document.querySelector('#buttonHolder');
const displayBox = document.querySelector('#displayBox');
const liveUpdateBox = document.querySelector('#liveUpdate');

//-------------PAGE SETUP-----------------
PopulateButtonGrid();

//--------BUTTON SETUP FUNCTIONS-----------

function PopulateButtonGrid() {
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
            SetButtonListeners(button, buttonText);
            row.appendChild(button);
        }
    }    
}

//populate text content for buttons
function SetButtonText(button, rowCounter, buttonPlacement) {
    if (rowCounter == 0) {
        buttonText = ['AC', 'C', '%', '÷'];
    } else if (rowCounter == 1) {
        buttonText = ['7', '8', '9', '×']; 
    } else if (rowCounter == 2) {
        buttonText = ['4', '5', '6', '-'];
    } else if (rowCounter == 3) {
        buttonText = ['1', '2', '3', '+'];
    } else if (rowCounter == 4) {
        buttonText = ['69', '0', '.', '='];
    }
    button.textContent = buttonText[buttonPlacement]; 
}

//Assign function to each button push
function SetButtonListeners(button, buttonText) {
    button.addEventListener("click", (event) => {    
        if (typeof(buttonText) == 'number') {
            //logic to put that number into the displaybox
        }
        if (buttonText == 'AC') {
            //link to AC function when it is complete
        }
        if (buttonText == 'C') {
            //link to C function when it is complete
        }
        if (buttonText == '%') {
            //link to percentage function when it is complete
        }
        if (buttonText == '÷') {
            //link to division function when it is complete
        }
        if (buttonText == '×') {
            //link to the multiplication function
        }
        if (buttonText == '-') {
            //link to the subtraction function
        }
        if (buttonText == '+') {
            //link to the addition function
        }
        if (buttonText == '=') {
            //link to the equals function
        }    
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