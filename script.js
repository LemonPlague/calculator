//-------------VARIABLES-------------
let currentCalculation = 0;
let value1 = '';
let input = '';
let operator = '';
let buttonText = [];
let lastChar = '';
const container = document.querySelector('#buttonHolder');
const displayBox = document.querySelector('#displayBox');
const liveUpdateBox = document.querySelector('#liveUpdate');

//-------------PAGE SETUP-----------------
PopulateButtonGrid();

//------------DISPLAY FUNCTIONS-------------
function UpdateDisplay(char) {
    //-------------TO DO------------
    //2. two consecutive operators being selected results in NaN
    //3. after equals has been pressed, if the next entry is a digit, it should replace
    //6. prevent an operator from being the first thing input
    //6. add a % function??!?!?! 



    switch (char) {
        case '+':
            lastChar = displayBox.textContent.charAt(displayBox.textContent.length -1);            
            if (isOperator(lastChar)) {
                input = displayBox.textContent.slice(0, -1);
                operator = char;
                displayBox.textContent = input;
                displayBox.textContent += char;
            } else {
                operator = char;
                displayBox.textContent += char;
            }
            
            if (currentCalculation == '' && liveUpdateBox.textContent == '') {
                value1 = input;
                input = '';
            } else if (currentCalculation == '' && liveUpdateBox.textContent != '') {
                value1 = liveUpdateBox.textContent;
                input = '';
            } else if (currentCalculation != '') {
                value1 = currentCalculation;
                currentCalculation = '';
                input = '';
            }
        break;

        case '×':
            lastChar = displayBox.textContent.charAt(displayBox.textContent.length -1);            
            if (isOperator(lastChar)) {
                input = displayBox.textContent.slice(0, -1);
                operator = char;
                displayBox.textContent = input;
                displayBox.textContent += char;
            } else {
                operator = char;
                displayBox.textContent += char;
            }
            
            if (currentCalculation == '' && liveUpdateBox.textContent == '') {
                value1 = input;
                input = '';
            } else if (currentCalculation == '' && liveUpdateBox.textContent != '') {
                value1 = liveUpdateBox.textContent;
                input = '';
            } else if (currentCalculation != '') {
                value1 = currentCalculation;
                currentCalculation = '';
                input = '';
            }
        break;

        case '÷':
            lastChar = displayBox.textContent.charAt(displayBox.textContent.length -1);            
            if (isOperator(lastChar)) {
                input = displayBox.textContent.slice(0, -1);
                operator = char;
                displayBox.textContent = input;
                displayBox.textContent += char;
            } else {
                operator = char;
                displayBox.textContent += char;
            }
            
            if (currentCalculation == '' && liveUpdateBox.textContent == '') {
                value1 = input;
                input = '';
            } else if (currentCalculation == '' && liveUpdateBox.textContent != '') {
                value1 = liveUpdateBox.textContent;
                input = '';
            } else if (currentCalculation != '') {
                value1 = currentCalculation;
                currentCalculation = '';
                input = '';
            }
        break;

        case '-':
            if (displayBox.textContent == '') {
                input += char;
                displayBox.textContent += char;
            } else if (operator == '' && currentCalculation == '' && liveUpdateBox.textContent == '') {
                operator = char;
                displayBox.textContent += char;
                value1 = input;
                input = '';
            } else if (operator == '' && currentCalculation == '' && liveUpdateBox.textContent != '') {
                operator = char;
                displayBox.textContent += char;
                value1 = liveUpdateBox.textContent;
                input = '';
            } else if (operator != '') {
                input += char;
                displayBox.textContent += char;
            } else if (input == 0) {
                input = char;
                displayBox.textContent += char;
            } else if (currentCalculation != '') {
                value1 = currentCalculation;
                currentCalculation = '';
                operator = char;
                displayBox.textContent += char;
                input = '';
            }
        break;

        //does not remove the liveupdate text or reverse math
        case 'C':
            lastChar = displayBox.textContent.slice(-2, -1);
            if (!isOperator(lastChar) && operator != '-') {
                input = displayBox.textContent.slice(0, -1);
                displayBox.textContent = input;
            } else if (isOperator(lastChar) || operator == '-') {
                displayBox.textContent = displayBox.textContent.slice(0, -1);
                operator = '';
            }
        break;

        case 'AC':
            input = '';
            operator = '';
            displayBox.textContent = '';
            liveUpdateBox.textContent = '';
            value1 = '';
            currentCalculation = '';
        break;

        case '=':
            if (liveUpdateBox.textContent != '') {
                displayBox.textContent = liveUpdateBox.textContent;
                currentCalculation = liveUpdateBox.textContent;
                liveUpdateBox.textContent = '';
                operator = '';
                
            //if equals is pushed for a single calculation
            } else { 
                currentCalculation = liveUpdateBox.textContent;
                input = '';        
                displayBox.textContent = currentCalculation;
                liveUpdateBox.textContent = '';
                operator = '';
            }
        break;

        case '.':
            if (value1 == '') {
                input += char;
                displayBox.textContent += char;
            } else if (value1 != '') {
                input += char;
                displayBox.textContent += char;
                liveUpdateBox.textContent = MathOperations(value1, input, operator);
            }
        break;

        case '%':
        break;

        default:
            if (displayBox.textContent == 0) {
                input = char;
                displayBox.textContent = input;
            } else if (value1 == '') {
                input += char;
                displayBox.textContent += char;
            } else if (value1 != '') {
                input += char;
                displayBox.textContent += char;
                liveUpdateBox.textContent = MathOperations(value1, input, operator);
            }
    }

    
    //Replace a 0 if that was the first thing entered
    // if (!isOperator(char) && char != '=' && input == '0') {
    //     input = char;
    //     displayBox.textContent = input;


    //add digits to the FIRST number
    // } else if (!isOperator(char) && char != '=' && value1 == '') {
    //     // input += char;
    //     // displayBox.textContent += char;


    //add digits to the SECOND number for the FIRST calculation
    // } else if (!isOperator(char) && char != '=' && value1 != '') {
    //     input += char;
    //     displayBox.textContent += char;
    //     liveUpdateBox.textContent = MathOperations(value1, input, operator);

        
    //OPERATOR selected for FIRST calculation
    // } else if (char != '=' && currentCalculation == '' && liveUpdateBox.textContent == '') {
        // operator = char;
        // displayBox.textContent += char;
        // value1 = input;
        // input = '';


    //OPERATOR selected for CONSECUTIVE calculation 
    // } else if (char != '=' && currentCalculation == '' && liveUpdateBox.textContent != '') {
    //     operator = char;
    //     displayBox.textContent += char;
    //     value1 = liveUpdateBox.textContent;
    //     input = '';


    //OPERATOR selected AFTER equals is pushed to continue ONE calculation
    // } else if (char != '=' && currentCalculation != '') {
        // operator = char;
        // displayBox.textContent += char;
        // value1 = currentCalculation;
        // currentCalculation = '';
        // input = '';


    //if equals is pushed after a string of calculations
    
    // if (char == '=' && liveUpdateBox.textContent != '') {
    //     displayBox.textContent = liveUpdateBox.textContent;
    //     currentCalculation = liveUpdateBox.textContent;
    //     liveUpdateBox.textContent = '';    
        
    // //if equals is pushed for a single calculation
    // } else { 
    //     currentCalculation = liveUpdateBox.textContent;
    //     input = '';        
    //     displayBox.textContent = currentCalculation;
    //     liveUpdateBox.textContent = '';
    //     operator = '';
    // }
}


//checks to see if the pushed button is an operator
function isOperator(char) {
    return ['+', '×', '÷'].includes(char);
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
    //add html class here
}

//Assign function to each button push
function SetButtonListeners(button) {
    button.addEventListener("click", () => { 
        UpdateDisplay(button.textContent);
    });
}
//check class first before executing update display on everything 
//and instead run according logic



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
