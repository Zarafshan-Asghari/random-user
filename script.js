"use strict";
let textToChange = document.getElementById("text");
let userInfo = document.getElementById("user-info");
let fName = document.getElementById("fullName");
let phoneNum = document.getElementById("phone");
let github = document.getElementById("github");
let linkdin = document.getElementById("linkdin");
let email = document.getElementById("email");
let degree = document.getElementById("school");
let btn = document.getElementById("btnRandom");
let image = document.getElementById("img");

let arr = [
  {
    fullName: "sahar alizadah",
    degree: "bachelor from usc university",
    img: "images/customer-1.jpg",
    phone: "(093) 121 769 829",
    linkdin: "https://linkdin.com/sahar199",
    email: "sahar203@gmail.com",
    github: "https://github.com/sahar",
  },
  {
    fullName: "emma graham",
    degree: "bachelor from Harward university",
    img: "images/customer-3.jpg",
    phone: "(093) 787 869 824",
    linkdin: "https://linkdin.com/emmaGraham",
    email: "graham.2023@gmail.com",
    github: "https://github.com/emma.graham",
  },
  {
    fullName: "ali shafaie",
    degree: "software engineer ",
    img: "images/customer-2.jpg",
    phone: "(089) 7283 345 347",
    linkdin: "https://linkdin.com/emmaGraham",
    email: "ali2012@gmail.com",
    github: "https://github.com/emma.graham",
  },
  {
    fullName: "shamael ansari",
    degree: "web developer",
    img: "images/customer-3.jpg",
    phone: "(039) 687 869 8024",
    linkdin: "https://linkdin.com/ansari.Shamael",
    email: "ansari123@gmail.com",
    github: "https://github.com/shamaelAnsari",
  },
  {
    fullName: "ihan roushan",
    degree: "mobile app developer ",
    img: "images/customer-4.jpg",
    phone: "(093) 797 869 8890",
    linkdin: "https://linkdin.com/ihan2024",
    email: "ihan.ro201@gmail.com",
    github: "https://github.com/ihanRoushan",
  },
  {
    fullName: "reza bator",
    degree: "uxi desighner",
    img: "images/customer-5.jpg",
    phone: "(089) 245 098 4521",
    linkdin: "https://linkdin.com/bator",
    email: "reza@gmail.com",
    github: "https://github.com/reza",
  },
];
// ----------------------------------------------
function random() {
  return Math.floor(Math.random() * arr.length);
}

// ---------------------------------------------
let i;
function setValue(index) {
  i = arr[index];
  image.src = i.img;
  frequentCode("name", i.fullName);
}

fName.addEventListener("click", () => {
  // textToChange.textContent = "name";
  // userInfo.textContent = i.fullName;
  frequentCode("name", i.fullName);
});

email.addEventListener("click", () => {
  // textToChange.textContent = "email";
  // userInfo.textContent = i.email;
  frequentCode("email", i.email);
});

degree.addEventListener("click", () => {
  // textToChange.textContent = "education";
  // userInfo.textContent = i.degree;
  frequentCode("education", i.degree);
});
phoneNum.addEventListener("click", () => {
  // textToChange.textContent = "phone";
  // userInfo.textContent = i.phone;
  frequentCode("phone number", i.phone);
});

linkdin.addEventListener("click", () => {
  // textToChange.textContent = "linkdin link";
  // userInfo.textContent = i.linkdin;
  frequentCode("linkdin page link", i.linkdin);
});
github.addEventListener("click", () => {
  // textToChange.textContent = "github link";
  // userInfo.textContent = i.github;
  frequentCode("github page link", i.github);
});
// ---------------------------------------------

window.addEventListener("DOMContentLoaded", function () {
  setValue(random());
});
// // ------------------------------------------------
btn.addEventListener("click", function () {
  setValue(random());
  fullName.addEventListener("click", () => {
    // textToChange.textContent = "name";
    // userInfo.textContent = i.fullName;
    frequentCode("name", i.fullName);
  });
});

function frequentCode(type, variable) {
  textToChange.textContent = type;
  userInfo.textContent = variable;
}
