//-------------VARIABLES-------------
let currentCalculation = '';
let value1 = '';
let input = '';
let operator = '';
let buttonText = [];
let lastChar = '';
let fontResize = 0;
const maxInputLength = 10;
const audio = document.querySelector('#bewbs');
const audio2 = document.querySelector('#noice');
const container = document.querySelector('#buttonHolder');
const displayBox = document.querySelector('#floater');
const textControl = document.querySelector('#displayBox');
const liveUpdateBox = document.querySelector('#liveUpdate');

//-------------PAGE SETUP-----------------
PopulateButtonGrid();

//------------DISPLAY FUNCTION-------------
function UpdateDisplay(char) {

    switch (char) {
        case '+':
            //prevent stacking of operators
            //one operator input directly after the next will 
            //overwrite the previously selected operator
            lastChar = displayBox.textContent.charAt(displayBox.textContent.length -1);            
            if (isOperator(lastChar)) {
                input = displayBox.textContent.slice(0, -1);
                operator = char;
                displayBox.textContent = input;
                displayBox.textContent += char;
            //prevent operator from being the first thing input
            } else if (displayBox.textContent == '') {
                //do nothing!
            } else {
                operator = char;
                displayBox.textContent += char;
            }
            
            //the initial operator selected after the initial number
            if (currentCalculation == '' && liveUpdateBox.textContent == '') {
                value1 = input;
                input = '';
            //continue consecutive calculations without pressing equals
            } else if (currentCalculation == '' && liveUpdateBox.textContent != '') {
                value1 = liveUpdateBox.textContent;
                input = '';
            //continue calculation after equals button was pressed
            } else if (currentCalculation != '') {
                value1 = currentCalculation;
                currentCalculation = '';
                input = '';
            }
        break;

        case '×':
            //prevent stacking of operators
            //one operator input directly after the next will 
            //overwrite the previously selected operator
            lastChar = displayBox.textContent.charAt(displayBox.textContent.length -1);            
            if (isOperator(lastChar)) {
                input = displayBox.textContent.slice(0, -1);
                operator = char;
                displayBox.textContent = input;
                displayBox.textContent += char;
            //prevent operator from being the first thing input
            } else if (displayBox.textContent == '') {
                //do nothing!
            } else {
                operator = char;
                displayBox.textContent += char;
            }

            //the initial operator selected after the initial number
            if (currentCalculation == '' && liveUpdateBox.textContent == '') {
                value1 = input;
                input = '';
            //continue consecutive calculations without pressing equals
            } else if (currentCalculation == '' && liveUpdateBox.textContent != '') {
                value1 = liveUpdateBox.textContent;
                input = '';
            //continue calculation after equals button was pressed
            } else if (currentCalculation != '') {
                value1 = currentCalculation;
                currentCalculation = '';
                input = '';
            }
        break;

        case '÷':
            //prevent stacking of operators
            //one operator input directly after the next will 
            //overwrite the previously selected operator
            lastChar = displayBox.textContent.charAt(displayBox.textContent.length -1);            
            if (isOperator(lastChar)) {
                input = displayBox.textContent.slice(0, -1);
                operator = char;
                displayBox.textContent = input;
                displayBox.textContent += char;
            //prevent operator from being the first thing input
            } else if (displayBox.textContent == '') {
                //do nothing!
            } else {
                operator = char;
                displayBox.textContent += char;
            }

            //the initial operator selected after the initial number
            if (currentCalculation == '' && liveUpdateBox.textContent == '') {
                value1 = input;
                input = '';
            //continue consecutive calculations without pressing equals
            } else if (currentCalculation == '' && liveUpdateBox.textContent != '') {
                value1 = liveUpdateBox.textContent;
                input = '';
            //continue calculation after equals button was pressed
            } else if (currentCalculation != '') {
                value1 = currentCalculation;
                currentCalculation = '';
                input = '';
            }
        break;

        case '-':
            //add a negative symbol if minus is first selected
            if (displayBox.textContent == '') {
                input += char;
                displayBox.textContent += char;
            //if minus is the first operator selected after the first number selected
            } else if (operator == '' && currentCalculation == '' && liveUpdateBox.textContent == '') {
                operator = char;
                displayBox.textContent += char;
                value1 = input;
                input = '';
            //continue consecutive calculations without pressing equals
            } else if (currentCalculation == '' && liveUpdateBox.textContent != '') {
                operator = char;
                displayBox.textContent += char;
                value1 = liveUpdateBox.textContent;
                input = '';
            //allows for minus to be input directly after an operator
            } else if (operator != '' && isOperator(displayBox.textContent.charAt(displayBox.textContent.length -1))) {
                input += char;
                displayBox.textContent += char;
            //otherwise minus will be the operator
            } else if (operator != '') {
                operator = char;
                displayBox.textContent += char;
            //allow for a minus to be input after an initial zero
            }else if (input == 0) {
                input = char;
                displayBox.textContent += char;
            //continue calculation after equals button was pressed
            } else if (currentCalculation != '') {
                value1 = currentCalculation;
                currentCalculation = '';
                operator = char;
                displayBox.textContent += char;
                input = '';
            }
        break;
        
        case 'C':
            lastChar = displayBox.textContent.charAt(displayBox.textContent.length -1);
            //clear any non-operator character before any calculations have been made
            if (!isOperator(lastChar) && operator != '-' && liveUpdateBox.textContent == '') {
                input = displayBox.textContent.slice(0, -1);
                displayBox.textContent = input;
            //clear any non-operator after calculations have already begun
            } else if (!isOperator(lastChar) && operator != '-' && liveUpdateBox.textContent != '') {
                displayBox.textContent = displayBox.textContent.slice(0, -1);
                input = input.slice(0, -1)
                liveUpdateBox.textContent = MathOperations(value1, input, operator);
            //clear any operator
            } else if (isOperator(lastChar) || operator == '-') {
                displayBox.textContent = displayBox.textContent.slice(0, -1);
                operator = '';
                value1 = displayBox.textContent;
                input = displayBox.textContent;
            }
        break;

        case 'AC':
            //clear every-damn-thing
            input = '';
            operator = '';
            displayBox.textContent = '';
            liveUpdateBox.textContent = '';
            value1 = '';
            currentCalculation = '';
        break;

        case '=':
            displayBox.textContent = liveUpdateBox.textContent;
            currentCalculation = liveUpdateBox.textContent;
            liveUpdateBox.textContent = '';
            operator = '';
        break;

        case '.':
            //if there's already a decimal being used
            if (input.includes('.')) {
                //do nothing!
            } else {
                input += char;
                displayBox.textContent += char;
            }
        break;

        case 'FUN':
            displayBox.textContent += 80085;
            //playSound();
            audio.play();
        break;

        default:
            if (displayBox.textContent == 0 || currentCalculation != '') {
                input = char;
                displayBox.textContent = input;
                currentCalculation = '';
            } else if (value1 == '') {
                input += char;
                displayBox.textContent += char;
            } else if (value1 != '') {
                input += char;
                displayBox.textContent += char;
                liveUpdateBox.textContent = MathOperations(value1, input, operator);
            }

            if (char == '69') audio2.play();
    }
    //resize text if the display is getting full
    //shrinkToFill();   
}

//checks to see if the pushed button is an operator
function isOperator(char) {
    return ['+', '×', '÷'].includes(char);
}

function shrinkToFill (maxInputLength, displayLength) {
    //resize the text to shrink as the displaybox is filled up
    //CURRENTLY NOT WORKING
    if (displayBox.textContent > maxInputLength) {
        //logic here
    }
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
        buttonText = ['AC', 'C', 'FUN', '÷'];
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
    button.style.fontSize = 'large';
    button.style.backgroundColor = '#adefd1ff';
    //add html class here
}

//Assign function to each button push and change color on press
function SetButtonListeners(button) {
    button.addEventListener("click", () => { 
        button.style.backgroundColor = '#00203FFF';
        RevertColor(button);
        UpdateDisplay(button.textContent);
    });
}
//revert color
function RevertColor(button) {
    setTimeout(() => {
        button.style.backgroundColor = '#adefd1ff';
        button.style.color = 'black';
    }, 50);
    
}


//-------------MATH FUNCTIONS-------------

function MathOperations(a, b, operator) {
    let answer = '';
    if (operator == '+') {
        answer = parseFloat(a) + parseFloat(b);
    } else if (operator == '-') {
        answer = parseFloat(a) - parseFloat(b);
    } else if (operator == '×') {
        answer = parseFloat(a) * parseFloat(b);
    } else if (operator == '÷') {
        answer = parseFloat(a) / parseFloat(b);
    }    
    
    if (hasMoreThan5Decimals(answer)) {
        return answer.toFixed(5);
    } else {
        return answer;
    }
}

function hasMoreThan5Decimals(number) {
    let decimalPart = number.toString().split('.')[1];
    return decimalPart && decimalPart.length > 5;
}
