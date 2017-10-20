
// makes sure the whole page is ready

$(document).ready(function() {
        // will first fade out the loading animation
        // Wait for 5 seconds to load
        jQuery("#status").delay(5000).fadeOut();

        // will fade out the whole DIV that covers the page.
        // Fade out and display jumbotron page in 1000ms
        jQuery("#preloader").delay(1000).fadeOut("slow");

        // This function hides the jumbotron on button click
        $("#hide").click(function(){
        	$("#jumboIn").hide();
        });

        // This function shows the jumbotron on button click
        $("#show").click(function(){
        	$("#jumboIn").show();
        });

        // This button changes font size and color of text inside jumbotron
        $("#changeFormat").click(function(){
        	$("#jumboIn p").css({ 'color': '#BB6E40', 'font-size': '30px' });;
        });
    });
