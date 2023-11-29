//-------------VARIABLES-------------
let currentCalculation = 0;
let firstInput = '';
let newInput = '';
let operator = '';
let buttonText = [];
const container = document.querySelector('#buttonHolder');
const displayBox = document.querySelector('#displayBox');
const liveUpdateBox = document.querySelector('#liveUpdate');

//-------------PAGE SETUP-----------------
PopulateButtonGrid();

//------------DISPLAY FUNCTIONS-------------
function UpdateDisplay() {
    let value1;
    let value2;
    if (displayBox.textContent != ''|| displayBox.textContent == '0') {
        displayBox.textContent = newInput;   
    } else {
        displayBox.textContent += newInput;
        displayBox.textContent += operator;
        operator = '';
    }
    if (displayBox.textContent.length -1 == '=') {
        let text = displayBox.textContent;
        let operatorUsed = text.match(/[+÷×-]/g)
    }
}

function QualifyUpdateDisplay(char) {
    if (isOperator(char)) {
        operator = char;
    } else {
        newInput = char;
    }
    UpdateDisplay();
}
//checks to see if the pushed button is an operator
function isOperator(char) {
    return ['+', '-', '×', '÷'].includes(char);
}

//--------BUTTON SETUP FUNCTIONS-----------

function PopulateButtonGrid() {
    //populate calculator button grid
    for (let rowCounter = 0; rowCounter < 5; rowCounter++) {        
        let row = document.createElement('div');
        row.id = `row${rowCounter}`;
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
function SetButtonText(button, rowCounter, buttonPosition) {
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
    button.textContent = buttonText[buttonPosition]; 
}

//Assign function to each button push
function SetButtonListeners(button) {
    button.addEventListener("click", () => { 
        UpdateDisplay(button.textContent);
    });
}


//-------------MATH FUNCTIONS-------------

function MathOperations(a, b, sign) {
    if (sign == '+') {
        Addition(a, b);
    } else if (sign == '-') {
        Subtraction(a, b);
    } else if (sign == '*') {
        Multiplication(a, b);
    } else if (sign == '/') {
        Division(a, b);
    }
    
}

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