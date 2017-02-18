var  globalData = [ {
      video: {
          title: "Anvesh Nishitha firstlook",
          url: "https://player.vimeo.com/video/177094203",
          src: "images/alekyaRo.jpg"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu"

  },{
      video: {
          title: "Alekhya Rohith",
          url: "https://player.vimeo.com/video/169418192",
          src: "images/alekyaRo.jpg"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  },{
      video: {
          title: "Fossil watch Co",
          url: "https://player.vimeo.com/video/153806952",
          src: "images/alekyaRo.jpg"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  },{
      video: {
          title: "O Balaaa... o bala...",
          url: "https://player.vimeo.com/video/150530186",
          src: "images/alekyaRo.jpg"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  },{
      video: {
          title: "O Balaaa... o bala...",
          url: "https://player.vimeo.com/video/150530186",
          src: "images/alekyaRo.jpg"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  },{
      video: {
          title: "O Balaaa... o bala...",
          url: "https://player.vimeo.com/video/150530186",
          src: "images/alekyaRo.jpg"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  }];





  // A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $('#js-firstImage').click(function(){
    	alert("I fucked up");
    });

    $('.video_section').hover(

        function(){
                debugger;
            $(this).find('.caption').fadeIn(250);
             $(this).find('.caption').css("padding-bottom","20px");//.fadeIn(250)
        },
        function(){
            debugger;
            $(this).find('.caption').fadeOut(250); //.fadeOut(205)
        }
    );


});


$(document).delegate(".video_section", "click", function() {
    	alert("The paragraph was clicked.");
    	var source = $("#some-template").html();
var template = Handlebars.compile(source);






Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

$('#replacble').html(template(globalData));
});



$(document).delegate(".videoLibrary", "click", function() {
  var source = $("#videoLibrary-template").html();
  var template = Handlebars.compile(source);
  $('#replacble').html(template({"videos":globalData}));
});

$(document).delegate(".video_section", "hover", function() {
  debugger;
      $(this).find('.caption').fadeIn(250);
       $(this).find('.caption').css("padding-bottom","20px");//.fadeIn(250)

});
