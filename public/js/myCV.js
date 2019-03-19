function smoothScrollingTo(target){
  $('html,body').animate({scrollTop:$(target).offset().top}, 500);
}

$(".sidebar").mCustomScrollbar({
            theme: "minimal"
});

$(".top-navbar").mCustomScrollbar({
    theme: "minimal",
    axis: 'x'
    
});

ScrollReveal().reveal('.card' , {
    
    delay: 200,
    duration: 500,
    scale: 0.3,
    viewFactor: 0.2,
    viewOffset: {
        top: -100
    }
});

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    smoothScrollingTo(this.hash);
});