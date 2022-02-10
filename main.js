let img = document.querySelector('img');

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function () {
    img.style.float = "left";
    img.style.marginLeft = "0";
});
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    img.style.float = "right";
});
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function () {
    img.style.display = "none";
});
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function () {
    let main = document.querySelector("main");
    main.appendChild(img);
});
let btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function () {
    let div = document.querySelector(".pastraipos");
    let pirmasP = div.firstChild;
    div.insertBefore(img, pirmasP);
});


