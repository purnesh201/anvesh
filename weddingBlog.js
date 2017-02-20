var  globalData = [ {
      video: {
          title: "Anvesh Nishitha coupleSoot",
          url: "https://player.vimeo.com/video/177094203",
          src: "images/AnveshNishitha.JPG"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu"

  },{
      video: {
          title: "Keshav Veena",
          url: "https://player.vimeo.com/video/204313015",
          src: "images/KeshavVeena.JPG"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  },{
      video: {
          title: "Akkineni vari pelli sandadi",
          url: "https://player.vimeo.com/video/202348357",
          src: "images/ShriyaAkhil.JPG"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  },{
      video:  {
          title: "Bhargavi Siddu's Moment ",
          url: "https://player.vimeo.com/video/193314462",
          src: "images/BhargaviSiddu.JPG"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  },{
      video: {
          title: "Yamini pelli",
          url: "https://player.vimeo.com/video/193886302",
          src: "images/sds.JPG"
      },
      description: "abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka anna nuv katti thopu thurumu abbo pichi keka"

  },{
      video: {
          title: "Alekhya Rohith",
          url: "https://player.vimeo.com/video/177094203",
          src: "images/AnveshNishitha.JPG"
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

            $(this).find('.caption').fadeIn(250);
             $(this).find('.caption').css("padding-bottom","20px");//.fadeIn(250)
        },
        function(){

            $(this).find('.caption').fadeOut(250); //.fadeOut(205)
        }
    );


});


$(document).delegate(".video_section", "click", function() {
    	alert("The paragraph was clicked.");
      var videoObj = {};
      console.log($($(this).find('img')[1]).data('url'));
      var videoUrl = $($(this).find('img')[1]).data('url');
      var videoDescription = $($(this).find('img')[1]).data('description');
      var videoTitle = $($(this).find('img')[1]).data('title');
    	var source = $("#some-template").html();
      var template = Handlebars.compile(source);
      $('#replacble').html(template({"videoUrl" : videoUrl ,"videoTitle" : videoTitle,
       "videoDescription":videoDescription}));
});



$(document).delegate(".videoLibrary", "click", function() {
  $('.about_us').hide();
  var source = $("#videoLibrary-template").html();
  var template = Handlebars.compile(source);
  $('#replacble').html(template({"videos":globalData}));
});

$(document).delegate(".video_section", "hover", function() {

      $(this).find('.caption').fadeIn(250);
       $(this).find('.caption').css("padding-bottom","20px");//.fadeIn(250)

});


function aboutUs(){
  var source = $("#aboutUs-template").html();
  var template = Handlebars.compile(source);
  $('#replacble').html(template());
}


function contactUs(){
  var source = $("#contactUs-template").html();
  var template = Handlebars.compile(source);
  $('#replacble').html(template());
  $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBppZqaJ-RcF5IuXM-3GpzMUYysJwyv3PY&callback=initMap");
  //initMap();
}

    function initMap() {
        var uluru = {
            lat: 17.4238677,
            lng: 78.4574937
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: uluru
        });

        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
