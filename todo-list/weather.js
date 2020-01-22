//openweathermap
const weather = document.querySelector(".js-weather");
const API_KEY = "ba77522d5fec3d94a7afd5cfae6a0e8b";
const COORDS = "coords";

//javascript는 보이지 않는 곳에서 계속해서 데이터를 refresh 해서 가져온다.
function getWeather(lat, lng) {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response) {
		return response.json();
	}).then(function(json) {
		const temperature = json.main.temp;
		const place = json.name;
		weather.innerText = `${temperature} @ ${place}`;
	});
	//fetch()안에는 ` 사용, https사용
}

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
	const latitude = position.coords.latitude; //위도
	const longitude = position.coords.longitude; //경도
	const coordsObj = {
		latitude, //== latitude: latitude
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
}

function handleGeoError() {

}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null) {
		askForCoords(); //좌표
	} else {
		//getWeather
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init() {
	loadCoords();
}
init();