function getKMI(w, h) {
    return (w / (h / 100 * h / 100)).toFixed(2);
}

function info(index) {
    let answer = "error";
    if (index < 18.5) {
        answer = "svoris nepakankamas";
    } else if (index >= 18.5 && index < 25) {
        answer = "svoris normalus";
    } else if (index >= 25 && index <= 30) {
        answer = "antsvoris";
    } else if (index > 30) {
        answer = "nutukimas";
    } return answer;
}

let kmi = document.createElement("p")
let calc = document.forms["calculator"];

calc.addEventListener("submit", function (e) {
    e.preventDefault();
    let weight = +calc["weight"].value;
    let height = +calc["height"].value;
    kmi.textContent = "Jusu KMI: " + getKMI(weight, height) + " - " + info(getKMI(weight, height));
    body.appendChild(kmi);
});

