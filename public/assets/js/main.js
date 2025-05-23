(function($){
	"use strict";
		
	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		autoplayTimeout: 8000,
		animateIn: 'fadeIn',
		autoplay: true,
		items: 1,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
		]
	});
	
	// Banner Slides Eight JS New
	$('.banner-slider-eight').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: true,
		autoplayTimeout: 8000,
		margin: 0,
		items: 1,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
		]
	});
	
	// Nice Select JS
	$('select').niceSelect();
	
	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Video Popup JS
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Feedback Carousel
	var $imagesSlider = $(".feedback-slides .client-feedback>div"),
	$thumbnailsSlider = $(".client-thumbnails>div");
	// images options
	$imagesSlider.slick({
		speed:300,
		slidesToShow:1,
		slidesToScroll:1,
		cssEase:'linear',
		fade:true,
		autoplay: true,
		draggable:true,
		asNavFor:".client-thumbnails>div",
		prevArrow:'.client-feedback .prev-arrow',
		nextArrow:'.client-feedback .next-arrow'
	});
	// Thumbnails options
	$thumbnailsSlider.slick({
		speed:300,
		slidesToShow:5,
		slidesToScroll:1,
		cssEase:'linear',
		autoplay: true,
		centerMode:true,
		draggable:false,
		focusOnSelect:true,
		asNavFor:".feedback-slides .client-feedback>div",
		prevArrow:'.client-thumbnails .prev-arrow',
		nextArrow:'.client-thumbnails .next-arrow',
	});
	var $caption = $('.feedback-slides .caption');
	var captionText = $('.client-feedback .slick-current img').attr('alt');
	updateCaption(captionText);
	$imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$caption.addClass('hide');
	});
	$imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		captionText = $('.client-feedback .slick-current img').attr('alt');
		updateCaption(captionText);
	});
	function updateCaption(text) {
		// if empty, add a no breaking space
		if (text === '') {
			text = '&nbsp;';
		}
		$caption.html(text);
		$caption.removeClass('hide');
	}

	// FAQ Accordion
	$(function() {
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" }, 0);
		});
	});

	// Success Story Slides
	$('.success-story-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		margin: 5,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
		]
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 4,
			},
			992: {
				items: 5,
			}
		}
	});
	
	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true, // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});

	// Buy Now Btn
    $('body').append("<a href='https://1.envato.market/JyOdr' class='buy-now-btn' target='_blank'><img src='assets/img/envato.png' alt='envato'/></a>");
	
	// Preloader
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
	});

	/*new-js "Home Demo - 6" */

	// Testimonials Wrap Slides
	$('.testimonials-wrap-slides').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		autoplayTimeout: 8000,
		animateIn: 'fadeIn',
		autoplay: true,
		items: 1,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			"<i class='fas fa-chevron-right'></i>"
		]
	});

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} 
		else {
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} 
		else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});


	/* Start "Currency Transfer Provider Demo" "JS" */

	// Language Switcher
	$(".language-option").each(function() {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function() {
            allOptions.removeClass('selected');
            $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	/* End "Currency Transfer Provider Demo" "JS" */

}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
	localStorage.setItem('luvion_theme', themeName);
	document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('luvion_theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}
// Immediately invoked function to set the theme on initial load
(function () {
	if (localStorage.getItem('luvion_theme') === 'theme-dark') {
		setTheme('theme-dark');
		document.getElementById('slider').checked = false;
	} else {
		setTheme('theme-light');
	  document.getElementById('slider').checked = true;
	}
})();