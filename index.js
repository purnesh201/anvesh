//Parallax
function simpleParallax() {
    //This variable is storing the distance scrolled
    var scrolled = $(window).scrollTop() + 1;

    //Every element with the class "scroll" will have parallax background
    //Change the "0.3" for adjusting scroll speed.
    $('.banner_image').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
    simpleParallax();
});
$(document).ready(function(){
	var height = $(window).height();
	$(".banner_image").css("height",Number(height)+'px');
	$(".navbar_section").css("top",Number(height)-120+'px');


});

$(document).delegate(function() {
    $('.video_section').hover(
        function(){
            $(this).find('.caption').fadeIn(250);
             $(this).find('.caption').css("padding-bottom","20px");//.fadeIn(250)
        },
        function(){
            $(this).find('.caption').fadeOut(250); //.fadeOut(205)
        }
    );
});
