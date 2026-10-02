//Define Variables
let currentInput = '';

let previousInput = '';
let activeOperator = '';

const display = document.querySelector('.text');
const buttons = document.querySelectorAll('.bento-card');

const add = (first,second) => first+second;
const sub = (first,second) => first-second;
const mul = (first,second) => first*second;
const div = (first,second) => first/second;
const mod = (first,second) => first%second;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value.trim() === '') return;            

        if (value === 'C') {
            clearText();
            return;
        }

        if (value === '←') {
            deleteLastCharacter();
            return;
        }

        if (!isNaN(value) || value === '.') {
            if( value === '.' && currentInput.includes('.')) return;
            currentInput += value;
            display.innerText = currentInput;
            console.log("numbers or decimals", value);
        } else {
            const operator = value;

            if (operator === '=') {
                if (activeOperator && previousInput !== '' && currentInput !== '') {
                    calculate();
                }
                return;
            }
            if (currentInput !== '') {
                previousInput = parseFloat(currentInput);
                activeOperator = operator;

                currentInput = '';
            }
            console.log("operators", value);
        }

        

        console.log(value);

    });
});

const clearText = () => {
    currentInput = '';
    display.innerText='0';
}

const deleteLastCharacter = () => {
   
    currentInput = currentInput.slice(0, -1);
    
    if (currentInput === '') {
        display.innerText = '0';
    } else {
        display.innerText = currentInput;
    }
};

const calculate = () => {
    const secondNum = parseFloat(currentInput);
    const firstNum = previousInput;
    let result = 0;

    switch (activeOperator) {
        case '+':
            result = add(firstNum, secondNum);
            break;
        case '-':
            result = sub(firstNum, secondNum);
            break;
        case 'x':
            result = mul(firstNum, secondNum);
            break;
        case '÷':
            result = div(firstNum, secondNum);
            break;
        default:
            return; 
    }

    display.innerText = result;
    
    currentInput = result.toString(); 
    previousInput = '';
    activeOperator = '';
};


console.log(add(2,5),sub(2,5),mul(2,5), div(2,5),mod(5,2));