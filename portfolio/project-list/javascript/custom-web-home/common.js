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

//to-do list
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

//For todo array modify
let toDos = [];

//html todo list remove
function deleteToDo(event) {
    //.dir detail tag
    const clickThisBtn = event.target;
    const clickThisLi = clickThisBtn.parentNode;
    toDoList.removeChild(clickThisLi);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(clickThisLi.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    //object transfer string
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function writeToDo(text) {
    const toDoListLi = document.createElement("li");
    const listDelBtn = document.createElement("button");
    const newId = toDos.length + 1;
    listDelBtn.innerText ="X"; //delete button
    listDelBtn.addEventListener("click", deleteToDo);
    const listSpan = document.createElement("span");
    listSpan.innerText = text;
    toDoListLi.appendChild(listSpan);
    toDoListLi.appendChild(listDelBtn);
    toDoListLi.id = newId;
    toDoList.appendChild(toDoListLi);
    const toDoObj = {
        text: text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const currentToDo = toDoInput.value;
    writeToDo(currentToDo);
    toDoInput.value == ""; //enter regist
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        //JSON = Javascript Object Notation
        const parsedToDos = JSON.parse(loadedToDos); //String transfer object
        //forEach = array repeat once
        parsedToDos.forEach(function(toDo){
            writeToDo(toDo.text);
        });
    }
}

//change background
const body = document.querySelector("body");
//images count
const IMG_NUMBER = 7;

function loadImages(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

//weather
const weather = document.querySelector(".js-weather");
const API_KEY = "ba77522d5fec3d94a7afd5cfae6a0e8b";
const COORDS = "coords";

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response) {
        return response.json()
    }).then(function(json) {
        const temperature = Math.floor(json.main.temp);
        const place = json.name; //local
        weather.innerText = `${temperature}℃ @${place}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
   const latitude = position.coords.latitude; //위도
   const longitude = position.coords.longitude; //경도
   const coordsObj = {
       latitude,
       longitude
   };
   saveCoords(coordsObj);
   getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("위치 정보를 받아 올 수 없습니다.");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    loadName();
    loadToDos();
    toDoForm.addEventListener("submit", handleToDoSubmit);
    const randomNumber = genRandom();
    loadImages(randomNumber);
    loadCoords();
}

init();