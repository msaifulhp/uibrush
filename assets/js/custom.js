$(function(){
	/***fixed-navbar***/
       function scroll() {
        if($(".navbar").offset().top>50) {
        $(".navbar-fixed-top").addClass("nav-top");
        }
        else {
        $(".navbar-fixed-top").removeClass("nav-top");
      }
}

$(window).scroll(scroll);
$(document).ready(scroll);
/***nice-scroll***/
        $("html").niceScroll(); 
        /***page-loader***/
       $(".page-loader").fakeLoader({
        spinner:"Spinner4",
        timeToHide:500,
        zIndex:"3",
       });
/***easing***/
        $('.nav li a,.array').bind('click', function(event) {
        var $anchor=$(this);
        $('html, body').stop().animate( {
            scrollTop: $($anchor.attr('href')).offset().top
        }
        , 500, 'easeOutSine');
        event.preventDefault();
    }
    );
         	/***light-box***/
      baguetteBox.run('.baguetteBoxFour', {
    buttons: true,

    });

      /***form-validation***/
      $("#contacTForm").validate({
      	rules:{
      		fname:{
      			required:true,
      		},
      		email:{
      			required:true,
      		},
      		sub:{
      			required:true,
      		},
      		mess:{
      			required:true,
      		},
      	}

      })
});