const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let operator = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "+" || value === "-" || value === "*" || value === "÷") {
      firstNumber = display.value;
      operator = value;
display.value += value;
return;
}
if (value === "=") {
    const expression = display.value.replace("÷", "/");
display.value = eval(expression);
}
if (value === "%") {
    display.value = Number(display.value) / 100;
    return;
}
if (value === "sin") {
    display.value = Math.sin(Number(display.value) * Math.PI / 180);
    return;
}
if (value === "cos") {
    display.value = Math.cos(Number(display.value) * Math.PI / 180);
    return;
}
if (value === "tan") {
    display.value = Math.tan(Number(display.value) * Math.PI / 180);
    return;
}
if (value === "C") {
    display.value = "";
    return;
}

    display.value += value;

});

});
