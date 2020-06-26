$(window).scroll(function(){
    const scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $("").css("width", scrollPercent + "%");
});

//language mode
const langMode = $(".toggle-wrap.lang input");
langMode.click(function(){
    if($(this).is(":checked") == true) {
        $("#page2 .parts .details .kor, #page2 .signature .kor").css("display","none");
        $("#page2 .parts .details .eng, #page2 .signature .eng").css("display","inline-block");
    } else {
        $("#page2 .parts .details .eng, #page2 .signature .eng").css("display","none");
        $("#page2 .parts .details .kor, #page2 .signature .kor").css("display","inline-block");
    }
});

//sort menu
const sortNav = $("#page1 .sort");
const sortNavItems = $("#page1 .sort li");
const itemWidth = $("#page1 .sort li.active").outerWidth();
$("#page1 .sort .active-bg").css("width", itemWidth);
sortNavItems.click(function(){
    sortNavItems.removeClass("active");
    $(this).addClass("active");
    const itemIndex = $(this).index();
    const changeWidth = $("#page1 .sort li.active").outerWidth();
    $("#page1 .sort .active-bg").css("width", changeWidth);
    if(itemIndex == 1) {
        $("#page1 .sort .active-bg").css("transform", "translate(42px, -50%)");
    } else if(itemIndex == 2) {
        $("#page1 .sort .active-bg").css("transform", "translate(89px, -50%)");
    } else if(itemIndex == 3) {
        $("#page1 .sort .active-bg").css("transform", "translate(131px, -50%)");
    } else if(itemIndex == 4) {
        $("#page1 .sort .active-bg").css("transform", "translate(176px, -50%)");
    } else {
        $("#page1 .sort .active-bg").css("transform", "translate(0, -50%)");
    }
});