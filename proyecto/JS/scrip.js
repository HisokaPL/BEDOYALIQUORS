$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.menu').addClass("sticky");
        }else {

        }
    })
});

// TYPING ANIMACION SCRIPT
var typed = new Typed(".typing", {
    strings: ["LAS 24/7","EN MEDELLIN"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});