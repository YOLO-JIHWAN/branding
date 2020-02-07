const contentsHeight = document.querySelector(".contents").offsetHeight; //content height

function autoScroll() {
	const scrolled = window.scrollY;
	console.log(scrolled);
	if(scrolled >= 500) {
		document.querySelector(".about-me").classList.add("animate");
		document.querySelector(".about-me .btn").classList.add("animate");
		window.scrollY = contentsHeight;
	} else {
		document.querySelector(".about-me").classList.remove("animate");
		document.querySelector(".about-me .btn").classList.remove("animate");
	}
}
window.addEventListener("scroll", autoScroll);

// //about more information
const btnMore = document.querySelectorAll('.btn-more');
const engTable = document.querySelector(".eng > .table");
const korTable = document.querySelector(".kor > .table");

[].forEach.call(btnMore, function(evt){
	evt.addEventListener("click", moreInfo, false);
});
function moreInfo(e) {
	if(this.innerHTML == "button") {
		engTable.classList.toggle("visible");
	} else {
		korTable.classList.toggle("visible");
	}
}