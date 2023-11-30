//-------------VARIABLES-------------
let currentCalculation = 0;
let value1 = '';
let value2 = '';
let input = '';
let operator = '';
let buttonText = [];
const container = document.querySelector('#buttonHolder');
const displayBox = document.querySelector('#displayBox');
const liveUpdateBox = document.querySelector('#liveUpdate');

//-------------PAGE SETUP-----------------
PopulateButtonGrid();

//------------DISPLAY FUNCTIONS-------------
function UpdateDisplay(char) {
    if (!isOperator(char) && char != '=') {
        input = char;
        displayBox.textContent += char;
    } else if (char != '=') {
        operator = char;
        displayBox.textContent += char;
        value1 = input;
        input = '';
    } else {
        value2 = input;
        input = '';
        currentCalculation = MathOperations(value1, value2, operator);
        displayBox.textContent = currentCalculation;
    }

    // if (isOperator(char)) {
    //     operator = char;
    // } else {
    //     newInput += char;
    // }

    // let value1;
    // let value2;
    // if (displayBox.textContent != ''|| displayBox.textContent == '0') {
    //     displayBox.textContent = newInput;   
    // } else {
    //     displayBox.textContent += newInput;
    //     displayBox.textContent += operator;
    //     operator = '';
    // }
    // if (isOperator(displayBox.textContent.length -1)) {
    //     value1 = displayBox.textContent.slice(0, -2);
    //     operatorUsed = text.match(/[+÷×-]/g)
    // } else if (displayBox.textContent.length -1 == '=') {
    //     value2 = displayBox.textContent.slice(displayBox.textContent.search(operatorUsed), -2);
    // }
    // displayBox.textContent = MathOperations(value1, value2, operatorUsed);
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

function MathOperations(a, b, operator) {
    if (operator == '+') {
        return parseFloat(a) + parseFloat(b);
    } else if (operator == '-') {
        return parseFloat(a) - parseFloat(b);
    } else if (operator == '×') {
        return parseFloat(a) * parseFloat(b);
    } else if (operator == '÷') {
        return parseFloat(a) / parseFloat(b);
    }    
}
