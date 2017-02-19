var source = $("#videoLibrary-template").html();
function bigImg(){

  $('.video_section').hover(
      function(){
          $(this).find('.caption').fadeIn(250);
           $(this).find('.caption').css("padding-bottom","20px");//.fadeIn(250)
      },
      function(){
          $(this).find('.caption').fadeOut(250); //.fadeOut(205)
      }
  );
};

$(document).delegate(".videoLibrary", "click", function() {
  $('.about_us').hide();
  var template = Handlebars.compile(source);
  $('#replacble').html(template({"videos":globalData}));
});
