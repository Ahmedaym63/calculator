

let displayValue = "";

function appendToOutputs(value) {
    displayValue += value;
    document.getElementById("result").value = displayValue;
}

function clearOutputs() {
    displayValue = "";
    document.getElementById("result").value = "";
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("result").value = displayValue;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
function clearDisplay() {
    displayValue = "";
    document.getElementById("result").value = "";
}
