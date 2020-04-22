//clock
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("strong"),
    clockAmPm = clockContainer.querySelector("span");

function getTime () {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    /*
    if(hours >= 12) {
        clockAmPm = "PM";
        hours = (date.getHours() - 2);
    }
    */
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

//greeting
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing"; //CN = Class Name

function saveName(text) {
    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//local storage
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //not exist user
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


function init() {
    getTime();
    setInterval(getTime, 1000);
    loadName();
}

init();