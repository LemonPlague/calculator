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
    //---still does not allow inputting negative numbers---

    //Replace a 0 if that was the first thing entered
    if (!isOperator(char) && char != '=' && input == '0') {
        input = char;
        displayBox.textContent = input;

    //add digits to the FIRST number as long as an operator HAS NOT been selected
    } else if (!isOperator(char) && char != '=' && value1 == '') {
        input += char;
        displayBox.textContent += char;

    //add digits to the SECOND number for the FIRST calculation
    } else if (!isOperator(char) && char != '=' && value1 != '') {
        input += char;
        displayBox.textContent += char;
        liveUpdateBox.textContent = MathOperations(value1, input, operator);
        
    //OPERATOR selected for FIRST calculation
    } else if (char != '=' && currentCalculation == '' && liveUpdateBox.textContent == '') {
        operator = char;
        displayBox.textContent += char;
        value1 = input;
        input = '';

    //OPERATOR selected for CONSECUTIVE calculation
    } else if (char != '=' && currentCalculation == '' && liveUpdateBox.textContent != '') {
        operator = char;
        displayBox.textContent += char;
        value1 = liveUpdateBox.textContent;
        input = '';

    //OPERATOR selected AFTER equals is pushed to continue ONE calculation
    } else if (char != '=' && currentCalculation != '') {
        operator = char;
        displayBox.textContent += char;
        value1 = currentCalculation;
        currentCalculation = '';
        input = '';

    //if equals is pushed after a string of calculations
    } else if (char == '=' && liveUpdateBox.textContent != '') {
        displayBox.textContent = liveUpdateBox.textContent;
        currentCalculation = liveUpdateBox.textContent;
        liveUpdateBox.textContent = '';    
        
    //if equals is pushed for a single calculation
    } else { 
        value2 = input;
        input = '';
        currentCalculation = MathOperations(value1, value2, operator);
        displayBox.textContent = currentCalculation;
        liveUpdateBox.textContent = '';
    }
    
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
