
let display = document.getElementById("display");

function addValue(value) {
    display.value = display.value + value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value === "") {
            return;
        }

        let result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    }
    catch {
        display.value = "Error";
    }
}

// Keyboard input support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
        addValue(key);
    } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteNumber();
    } else if (key === "Escape") {
        clearDisplay();
    }
});