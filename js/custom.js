/*============================================================
* Template Name    : MyFitness - One Page Gym Html Template
* Author           : Vishal Lad
* Version          : 1.0
* Created          : 05/Apr/2020;
* File Description : Main JS file of the template
===========================================================*/

/*====================== TABLE 
    1.PRELOADER
	2.STICKY ADD
    3.SCROLL DOWN SPEED
	4.LOGO BACKGROUND EFFECT
	5.MENU-BAR TOGGLE
	6.COUNTER
    7.SCROLL TOP SHOW
	8.SCROLL TOP CLICK EVENT
    9.TESTIMONIAL CAROUSEL
    10.NUTRITION CAROUSEL
    11.ACCORDIAN COLLAPSE
    12.HOME	CAROUSEL
 ========================*/

(function($)  {
	"use strict"; // Start of use strict
	
	// PRELOADER
    $(window).on('load', function() {
        $('#preloader').delay(3000).fadeOut('slow');
    });
	
	// STICKY ADD
	window.onscroll = function() {myFunction()};
	var header = document.getElementById("navigation");
	var sticky = header.offsetTop;
	function myFunction() {
	  if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	  } else {
		header.classList.remove("sticky");
	  }
	}
	
	// SCROLL DOWN SPEED
	$('a.page-scroll').click(function(event) {
		var targetHref = $(this).attr('href');
		$('html, body').animate({		
			scrollTop: $(targetHref).offset().top		
		}, 1250);
		event.preventDefault();
	});
	
	// LOGO BACKGROUND EFFECT
    var navbar = $('.navbar').outerWidth();
	var container = $('.navbar .container').outerWidth();
	var navimg = $('.nav-img').outerWidth();
    $('.back-effect').css("width", (navbar - container)/2 + navimg + 70);
	$(window).resize(function() {
		var navbar = $('.navbar').outerWidth();
		var container = $('.navbar .container').outerWidth();
		var navimg = $('.nav-img').outerWidth();
		$('.back-effect').css("width", (navbar - container)/2 + navimg + 70);
	});
		
	// MENU-BAR TOGGLE
	$('.bar-toggler').on('click', function () {
		$('.menu-bar').toggleClass('active');
		$('.bar-toggler').toggleClass('change');
	});
	
    // COUNTER
    $('.counter-data').appear(function() {
		$('.counter-number').countTo();
    });
	
    // SCROLL TOP SHOW
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//SCROLL TOP CLICK EVENT
	$('.scrollToTop').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//  TESTIMONIAL CAROUSEL
	$('.inner-testimonial').owlCarousel({
		loop: true,
		center: true,
		margin: 0,
		autoplay: true,
		dots: true,
		autoplayTimeout: 15000,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
	
	//  NUTRITION CAROUSEL
	$('.nutrition-img').owlCarousel({
		loop: true,
		center: true,
		margin: 0,
		autoplay: true,
		dots: true,
		autoplayTimeout: 5000,
		smartSpeed: 1500,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
	
	//  ACCORDIAN COLLAPSE
	$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
	});
	
	//  HOME CAROUSEL
	$('.home-inner').owlCarousel({
		loop: true,
		margin: -1,
		autoplay: true,
		dots: true,
		autoplayTimeout: 7000,
		smartSpeed: 1200,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1170: {
				items: 1
			}
		}
	});
	
	// ADS CLOSE
	$('.ads button').on('click', function () {
		$('.google-ads').css('display','none');
	});
		
})(jQuery);