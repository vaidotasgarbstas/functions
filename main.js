function createCard(imageURL, nameSurname, year, location, mail) {
    let newCardDiv = document.createElement("div");
    newCardDiv.className = "card";
    let profImg = document.createElement("img");
    profImg.className = "img";
    profImg.src = imageURL;
    let newName = document.createElement("div");
    newName.textContent = nameSurname;
    let newAge = document.createElement("div");
    newAge.textContent = year;
    let newAddress = document.createElement("div");
    newAddress.textContent = location;
    let newEmail = document.createElement("div");
    newEmail.textContent = mail;

    newCardDiv.append(profImg, newName, newAge, newAddress, newEmail);
    console.log(newCardDiv)
    return newCardDiv
}
function appendCard(card) {
    let parrent = document.querySelector(".container");
    parrent.append(card);
}

async function getData() {
    const requestURL = 'https://randomuser.me/api/';
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    getData().then(data => {
        // imageURL, nameSurname, year, location, mail
        let { picture, name, dob, location, email } = data.results[0];
        name = `${name.title} ${name.first} ${name.last}`;
        location = `${location.city} ${location.country}`;
        picture = picture.large;
        email = email;
        dob = dob.age;

        let card = createCard(picture, name, dob, location, email)
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})