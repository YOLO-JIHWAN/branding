//filter lnb
const indicator = document.querySelector('.link-indicator');
const items = document.querySelectorAll('.nav__link');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('active');
    item.removeAttribute('style');
  });
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');


  el.classList.add('active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target)});
  item.classList.contains('active') && handleIndicator(item);
});

$(window).resize(function() {
  console.log("hi");
});

//horizon scrolling
$(window).scroll(function(){
  var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
  $(".horizon-scroll").css("width", scrollPercent + "%");
});

//go to top
$(".scroll-top").click(function(){
  $("html").scrollTop(0);
});
$(window).scroll(function(){
  const winScrollTop = $(window).scrollTop();
  if(winScrollTop > 250) {
    $(".scroll-top").css("display", "block");
  } else {
    $(".scroll-top").css("display","none");
  }
});

//gnb
$(".gnb li").click(function(){
  const gnbText = $(this).text();
  $(".gnb li").removeClass("on");
  $(this).addClass("on");
  $("#content .container-fluid").removeClass("visible");
  $("#content .container-fluid"+"."+gnbText).addClass("visible");
});

$(".mob-gnb li").click(function(){
  const mobGnbText = $(this).children().text();
  $("#content .container-fluid").removeClass("visible");
  $("#content .container-fluid"+"."+mobGnbText).addClass("visible");
  $("#header").removeClass("opened");
});

//mobile gnb
function mobOpen() {
  const burger = document.querySelector(".burger-wrap"),
      mobHeader = document.querySelector("#header");

      burger.onclick = function() {
        mobHeader.classList.toggle("opened");
      }
}
mobOpen();

//skill progress-bar
$(".profile .nav-tabs .nav-item").on("click", function(){
  let navLinkHerf = $(this).children().attr("href");
  if(navLinkHerf == "#skillInfo") {
    let progressBar = $("#skillInfo .progress .progress-bar");
    progressBar.each(function(){
      let barValueNow = $(this).attr("aria-valuenow");
      //use backtik
      $(this).width(`${barValueNow}%`);
      $(this).text(`${barValueNow}%`);
    });
  } else {
    $("#skillInfo .progress .progress-bar").width(0);
    $("#skillInfo .progress .progress-bar").text("");
  }
});

//Validate