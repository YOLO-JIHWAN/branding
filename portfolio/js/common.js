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
$(".profile .nav-tabs .nav-item").on("click", function(){
  let navLinkHerf = $(this).children().attr("href");
  if(navLinkHerf == "#skillInfo") {
    let progressBar = $("#skillInfo .progress .progress-bar");
    progressBar.each(function(){
      let barValueNow = $(this).attr("aria-valuenow");
      $(this).width(barValueNow + "%");
      $(this).text(barValueNow + "%");
    });
  } else {
    $("#skillInfo .progress .progress-bar").width(0);
    $("#skillInfo .progress .progress-bar").text("");
  }
});

//Contact
/*
let regPhoneNum = /^\d{3}-\d{3,4}-\d{4}$/;
if(!regPhoneNum.test($("input[name='c-pnumber']").val())){
  return false;
}
*/
//Validate
//email validate
function chkEmail(str) {
  let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if(regEmail.test(str)) return true;
  else return false;
}