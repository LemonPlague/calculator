//-------------VARIABLES-------------

let runningTotal = 0;
let secondNumber = 0;
let operator = '';
const container = document.querySelector('#buttonHolder');
const liveUpdateBox = document.querySelector('p');

//-------------PAGE SETUP-----------------

SetPage();

function SetPage() {


    //populate calculator button grid
    for (let i = 0; i < 4; i++) {
        let buttonContent = [];
        let row = document.createElement('div');
        row.id = `row${i}`;
        row.setAttribute(`class`, `gridRows`);
        container.appendChild(row);
        for (let x = 0; x < 4; x++) {
            if (i == 0) {
                buttonContent = ['7', '8', '9', '/']; 
            } else if (i == 1) {
                buttonContent = ['4', '5', '6', '*'];
            } else if (i == 2) {
                buttonContent = ['1', '2', '3', '-'];
            } else if (i == 3) {
                buttonContent = ['ac', '0', '.', '+'];
            }
            let button = document.createElement('button');
            button.setAttribute(`class`, `rowButton`);
            button.addEventListener("click", (event) => {
                //make it do the thing
                
            })
            row.appendChild(button);
        }
    }
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