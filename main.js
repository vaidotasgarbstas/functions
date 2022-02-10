let btn1 = document.getElementById('btn1');

btn1.addEventListener("click", function () {
    let form = document.getElementById("form");
    form.classList.remove("visible");
})


let btn2 = document.getElementById('btn2');

btn2.addEventListener("click", function () {
    let form = document.getElementById("form");
    form.classList.add("visible");
    swal("Dekojame!", "Jusu nuomone mums svarbi!", "success");
})
