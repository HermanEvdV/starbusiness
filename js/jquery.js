// JavaScript Document

function fixDiv() {
    var $div = $("#nav");
    if ($(window).scrollTop() > $div.data("top")) { 
        $('#nav').css({'position': 'fixed', 'top': '0', 'width': '100%'}); 
    }
    else {
        $('#nav').css({'position': 'static', 'top': 'auto', 'width': '100%'});
    }
}
