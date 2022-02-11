function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let result = document.createElement('p');
let count = 0;
let randNum = rand(1, 100);
console.log(randNum);

let pirmaForma = document.forms["pirma"];
pirmaForma.addEventListener("submit", function (e) {
    e.preventDefault();
    let skaicius = +pirmaForma["number"].value;
    console.log(skaicius);
    count++;
    if (randNum > skaicius) {
        result.textContent = `Iveskite didesni skaiciu nei ${skaicius}.`;
    } else if (randNum < skaicius) {
        result.textContent = `Iveskite mazesni skaiciu nei ${skaicius}.`;
    } else {
        result.textContent = `Atspejote is ${count} karto`;
    }
    body.appendChild(result);
});