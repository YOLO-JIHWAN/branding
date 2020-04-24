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
const toDos = [];

//html todo list remove
function deleteToDo(event) {
    //.dir detail tag
    const clickThisBtn = event.target;
    const clickThisLi = clickThisBtn.parentNode;
    toDoList.removeChild(clickThisLi);
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

function init() {
    getTime();
    setInterval(getTime, 1000);
    loadName();
    loadToDos();
    toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();