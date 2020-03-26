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