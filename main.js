let form = document.querySelector("form");
let ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let listElement = form["toDo"].value;
    let list = document.createElement("li");
    list.textContent = listElement;

    ul.appendChild(list);
    e.target.elements.toDo.value = "";
})



const lista = document.querySelector('input[type="text"]');

lista.addEventListener('focus', (event) => {
    event.target.style.background = '#4CAF50';
    // lista.value = "";
});
lista.addEventListener('blur', (event) => {
    event.target.style.background = '';
});