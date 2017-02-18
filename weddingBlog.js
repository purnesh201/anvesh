



//var productsHtml = freshProductsTemplate(productdata);

  // A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $('#js-firstImage').click(function(){
    	alert("I fucked up");
    });


 //    $('.instagram_block').click(function(){
 //    	alert("The paragraph was clicked.");
 //    	$.get('/src/js/views/weddingBlog.hbs', function(data) {
 //    	weddingBlogTemplate = Handlebars.compile(data);
 //  		});
 //    	$('.main_section').html(weddingBlogTemplate);
	// });

});


$(document).delegate(".video_section", "click", function() {
    	alert("The paragraph was clicked.");
    	var source = $("#some-template").html();
var template = Handlebars.compile(source);

var data = {
    users: [ {
        person: {
            firstName: "Garry",
            lastName: "Finch"
        },
        jobTitle: "Front End Technical Lead",
        twitter: "gazraa"
    }, {
        person: {
            firstName: "Garry",
            lastName: "Finch"
        },
        jobTitle: "Photographer",
        twitter: "photobasics"
    }, {
        person: {
            firstName: "Garry",
            lastName: "Finch"
        },
        jobTitle: "LEGO Geek",
        twitter: "minifigures"
    } ]
};

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});

$('#replacble').html(template(data));
});
