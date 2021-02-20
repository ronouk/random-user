"use strict";

// variable declaration

const userMainImage = document.querySelector(".user-main-image");
const userMainName = document.querySelector(".user-main-name");
const userMainEmail = document.querySelector(".user-main-email");
const userMainPhone = document.querySelector(".user-main-phone");
const userMainCountry = document.querySelector(".user-main-country");
const randomQuote = document.querySelector(".random-quote");

// Random user api
const userApi = "https://randomuser.me/api/";
fetch(userApi)
    .then(res => res.json())
    .then(data => {

        const dataSource = data.results[0];
        // console.log(dataSource);
        userMainImage.src = dataSource.picture.large;
        userMainName.innerText = dataSource.name.title + " " + dataSource.name.first + " " + dataSource.name.last;
        userMainEmail.innerText = dataSource.email;
        userMainPhone.innerText = dataSource.phone;
        userMainCountry.innerText = dataSource.location.country;

    });

function mouseOver(target) {
    document.querySelector(`.${target}`).style.color = "#efefef";
};

function mouseOut(target) {
    document.querySelector(`.${target}`).style.color = "";
};

fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then(data => {
        displayUser(data.results);
    });

const displayUser = users => {
    const userDiv = document.querySelector(".users");
    users.forEach(singleUser => {
        // console.log(singleUser);
        const userBox = document.createElement("div");
        userBox.className = "user";
        const userInfo = `
            <img class="user-image" src="${singleUser.picture.large}" alt="">
            <div class="user-name">${singleUser.name.title + " " + singleUser.name.first + " " + singleUser.name.last}</div>
            <div class="user-email">${singleUser.email}</div>
            <div class="user-phone">${singleUser.phone}</div>
            <div class="user-country">${singleUser.location.country}</div>
        `;

        userBox.innerHTML = userInfo;
        userDiv.appendChild(userBox);
    });
}


// Random quote api
fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => {
        randomQuote.innerText = data.content + " - " + data.author;
    })