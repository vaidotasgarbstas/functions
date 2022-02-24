function createCard(imageURL, nameSurname, nick, position) {
    let newCardDiv = document.createElement("div");
    newCardDiv.className = "card";
    let profImg = document.createElement("img");
    profImg.className = "img";
    profImg.src = imageURL;
    let newName = document.createElement("div");
    newName.textContent = nameSurname;
    let newNick = document.createElement("div");
    newNick.textContent = nick;
    let newPosition = document.createElement("div");
    newPosition.textContent = position;


    newCardDiv.append(profImg, newName, newNick, newPosition);
    console.log(newCardDiv)
    return newCardDiv
}
function appendCard(card) {
    let parrent = document.querySelector(".container");
    parrent.append(card);
}
//RANDOM CHARACTER-----------------------------------------------------------------

async function getRandom() {
    const requestURL = 'https://www.breakingbadapi.com/api/character/random';
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    getRandom().then(data => {
        // (imageURL, nameSurname, nick, position)
        let { img, name, nickname, occupation } = data[0];
        let card = createCard(img, name, nickname, occupation)
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})
//REMOVE ALL CHARACTERS------------------------------------------------------------
let btnRemove = document.getElementById("remove");
btnRemove.addEventListener("click", function () {
    let reset = document.querySelector(".container");
    reset.innerHTML = "";
})

//GET CHARACTER BY ID-----------------------------------------------------

async function getCharacter(id) {
    const requestURL = 'https://www.breakingbadapi.com/api/characters/' + id;
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btnID = document.getElementById("id");
btnID.addEventListener("click", function () {
    input = prompt("Enter ID", 1);

    getCharacter(input).then(data => {
        let { img, name, nickname, occupation } = data[0];
        let card = createCard(img, name, nickname, occupation)
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})

//GET ALL CHARACTERS-----------------------------------------------------------

async function getAll(all) {
    const requestURL = 'https://www.breakingbadapi.com/api/characters/';
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btnAll = document.getElementById("all");
btnAll.addEventListener("click", function () {

    getAll(all).then(data => {

        data.forEach(item => {
            console.log(item)
            let { img, name, nickname, occupation } = item;
            let card = createCard(img, name, nickname, occupation)
            appendCard(card);
        })

    }).catch(error => {
        console.log(error);
    });
})

//GET CHARACTER BY NAME-----------------------------------------------------------

async function getName(name) {
    const requestURL = 'https://www.breakingbadapi.com/api/characters?name=' + name;
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btnName = document.getElementById("name");
btnName.addEventListener("click", function () {
    let inputName = prompt("Enter character name: ", "Walter")

    getName(inputName).then(data => {
        data.forEach(item => {
            console.log(item)
            let { img, name, nickname, occupation } = item;
            let card = createCard(img, name, nickname, occupation)
            appendCard(card);
        })

    }).catch(error => {
        console.log(error);
    });
})

//GET CERTAIN COUNT------------------------------------------------------------------

async function getCount(count) {
    const requestURL = 'https://www.breakingbadapi.com/api/characters?limit=' + count;
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btnCount = document.getElementById("count");
btnCount.addEventListener("click", function () {
    let inputCount = prompt("Enter the count of characters: ", "10")

    getCount(inputCount).then(data => {
        data.forEach(item => {
            console.log(item)
            let { img, name, nickname, occupation } = item;
            let card = createCard(img, name, nickname, occupation)
            appendCard(card);
        })

    }).catch(error => {
        console.log(error);
    });
})

//ALL CHARACTERS FROM "BETTER CALL SAUL"------------------------------------------------------------

async function getAll2() {
    const requestURL = 'https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul';
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btnAll2 = document.getElementById("saul");
btnAll2.addEventListener("click", function () {

    getAll2(all).then(data => {

        data.forEach(item => {
            console.log(item)
            let { img, name, nickname, occupation } = item;
            let card = createCard(img, name, nickname, occupation)
            appendCard(card);
        })

    }).catch(error => {
        console.log(error);
    });
})

//FILTER CHARACTERS BY SEASON-------------------------------------------------------------------

async function getSeason() {
    const requestURL = 'https://www.breakingbadapi.com/api/characters?category=breaking+bad';
    const request = new Request(requestURL);
    const response = await fetch(request, { mode: 'cors' });
    const data = await response.json();
    console.log(data);

    return data;
}

let btnSeason = document.getElementById("season");
btnSeason.addEventListener("click", function () {
    let inputSeason = +prompt("Enter season number: ");

    getSeason(inputSeason).then(data => {
        let filtered = data.filter(item => item.appearance.includes(inputSeason));
        console.log(filtered);
        filtered.forEach(item => {
            let { img, name, nickname, occupation } = item;
            let card = createCard(img, name, nickname, occupation);
            appendCard(card);
        })

    }).catch(error => {
        console.log(error);
    })
})
