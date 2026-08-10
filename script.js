const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function percentage() {
    if (display.value === "") {
        return;
    }

    const value = Number(display.value);

    if (Number.isNaN(value)) {
        display.value = "Error";
        return;
    }

    display.value = value / 100;
}

function calculate() {
    if (display.value.trim() === "") {
        return;
    }

    try {
        const expression = display.value;

        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .catch(() => {
                console.log("Service worker registration failed.");
            });
    });
      }
function calculateSin() {
    const value = Number(display.value);

    if (Number.isNaN(value)) {
        display.value = "Error";
        return;
    }

    display.value = Math.sin(value * Math.PI / 180);
}

function calculateCos() {
    const value = Number(display.value);

    if (Number.isNaN(value)) {
        display.value = "Error";
        return;
    }

    display.value = Math.cos(value * Math.PI / 180);
}

function calculateTan() {
    const value = Number(display.value);

    if (Number.isNaN(value)) {
        display.value = "Error";
        return;
    }

    display.value = Math.tan(value * Math.PI / 180);
                }

