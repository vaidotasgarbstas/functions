let calc = document.forms["calculator"];
let sum = document.createElement("p")

calc.addEventListener("submit", function (e) {
    e.preventDefault();
    let number1 = +calc["number1"].value;
    let number2 = +calc["number2"].value;
    sum.textContent = `Atsakymas: ${number1 + number2}.`;
    calc.appendChild(sum);
});