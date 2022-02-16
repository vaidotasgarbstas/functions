document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault()
    let value = document.getElementById("mySelect").value;

    let season = document.getElementById("mySelect");
    let body = document.querySelector("body");

    if (value == "vasara") {
        body.style.backgroundImage = "url(https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg?w=1550)"
    }
    else if (value == "pavasaris") {
        body.style.backgroundImage = "url(https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg)";
    }
    else if (value == "ruduo") {
        body.style.backgroundImage = "url(https://cdn.britannica.com/88/137188-050-8C779D64/Boston-Public-Garden.jpg)";
    }
    else if (value == "ziema") {
        body.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/b/b0/Winter_forest_silver.jpg)";
    }
});