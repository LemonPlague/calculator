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

SetPage();

function SetPage() {

    //populate calculator button grid
    for (let rowCounter = 0; rowCounter < 4; rowCounter++) {
        
        let row = document.createElement('div');
        row.id = `row${i}`;
        row.setAttribute(`class`, `gridRows`);
        container.appendChild(row);
        for (let x = 0; x < 4; x++) {            
            let button = document.createElement('button');
            button.setAttribute(`class`, `rowButton`);
            SetButtons(x);
            row.appendChild(button);
        }
    }
    //populate text content for buttons
    function SetButtons(buttonPlacement) {
        if (rowCounter == 0) {
            buttonContent = ['7', '8', '9', '÷']; 
        } else if (rowCounter == 1) {
            buttonContent = ['4', '5', '6', '×'];
        } else if (rowCounter == 2) {
            buttonContent = ['1', '2', '3', '-'];
        } else if (rowCounter == 3) {
            buttonContent = ['AC', '0', '.', '+'];
        }
        button.textContent = buttonContent[buttonPlacement]; 
    }

    

    //Add event listeners and text content to buttons
    button.addEventListener("click", (event) => {
        //check conditions to update variables and display numbers

        //-----THIS LOGIC NEEDS TO BE RETHOUGHT. THIS WON'T WORK---
        if (typeof(buttonContent[x]) == 'number' && runningTotal == 0) {
            runningTotal = buttonContent[x];
            //logic to display
            //here
        } else if (typeof(buttonContent[x]) == 'number' && runningTotal != 0) {
            secondNumber == buttonContent[x];
            //logic to display
            //here
        } else if (typeof(buttonContent[x]) != 'number') {
            //logic to execute function
            //here
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