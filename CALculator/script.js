let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculator = {
    displayValue: '',
    firstOperand: '',
    secondOperand: '',
    operator: '',
    result: ''
};

buttons.forEach(button => {
    button.addEventListener('click', handleButtonPress);
});

function handleButtonPress(event) {
    let buttonValue = event.target.textContent;

    switch (buttonValue) {
        case 'C':
            calculator.displayValue = '';
            calculator.firstOperand = '';
            calculator.secondOperand = '';
            calculator.operator = '';
            calculator.result = '';
            display.value = '';
            break;
        case '←':
            calculator.displayValue = calculator.displayValue.slice(0, -1);
            display.value = calculator.displayValue;
            break;
        case '=':
            calculateResult();
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleOperatorPress(buttonValue);
            break;
        default:
            calculator.displayValue += buttonValue;
            display.value = calculator.displayValue;
    }
}

function handleOperatorPress(operator) {
    calculator.firstOperand = calculator.displayValue;
    calculator.operator = operator;
    calculator.displayValue += operator;
    display.value = calculator.displayValue;
}

function calculateResult() {
    calculator.secondOperand = calculator.displayValue.split(calculator.operator)[1];
    let result;

    switch (calculator.operator) {
        case '+':
            result = parseFloat(calculator.firstOperand) + parseFloat(calculator.secondOperand);
            break;
        case '-':
            result = parseFloat(calculator.firstOperand) - parseFloat(calculator.secondOperand);
            break;
        case '×':
            result = parseFloat(calculator.firstOperand) * parseFloat(calculator.secondOperand);
            break;
        case '÷':
            result = parseFloat(calculator.firstOperand) / parseFloat(calculator.secondOperand);
            break;
    }

    calculator.result = result;
    calculator.displayValue = calculator.firstOperand + calculator.operator + calculator.secondOperand + '=' + calculator.result;
    display.value = calculator.displayValue;
    calculator.firstOperand = '';
    calculator.secondOperand = '';
    calculator.operator = '';
}