let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
};

function appendParanthesis() {
    if(currentInput==="0") {
        currentInput = "(";
    }
    else if(!currentInput.includes("(") || (currentInput.includes(")")) && (currentInput.split("(").length > currentInput.split(")").length)) {
        currentInput += "(";
    }
    else {
        currentInput += ")";
    }
    updateDisplay();
};

function updateDisplay() {
    document.getElementById('display').innerText = currentInput || 0;
};

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
};

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
};

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    }
    catch (error) {
        alert("Invalid Syntax");
        clearDisplay();
    }
};