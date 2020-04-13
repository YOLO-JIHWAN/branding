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

//skill progress-bar
/*
$(".nav-tabs .nav-item").click(function(){
  if($(this).children().attr("href") == "#skillInfo") {
    $(".profile .progress-bar").each(function(){
      console.log($(this));
      // let profileProgressbar = $(this).attr("aria-valuenow");
      // $(this).width(profileProgressbar + "%");
    });
  } else {
    $(".profile .progress-bar").width(0);
  }
});
*/
function movingProgressBar () {
  let progressBar = $(".profile .progress-bar");
  let skillsTab = $(".profile .nav-link")
  let skillsTabHref = skillsTab.attr("href");
  let barValue = progressBar.each(function(){
    $(this).attr("aria-valuenow")
  });

  // console.log(barValue);
}
movingProgressBar();