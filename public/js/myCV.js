function smoothScrollingTo(target){
  $('html,body').animate({scrollTop:$(target).offset().top}, 500);
}

$(".sidebar").mCustomScrollbar({
            theme: "minimal"
});

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    smoothScrollingTo(this.hash);
});