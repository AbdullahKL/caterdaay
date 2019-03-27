
$('.slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 2000,
	arrows: false,
	dots: false,
	focusOnSelect: false,
	speed: 1000,
});
$('.search-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 2000,
	arrows: false,
	dots: true,
	focusOnSelect: false,
	speed: 1000,
});
$('.logo-slider').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 2000,
	arrows: false,
	dots: false,
	focusOnSelect: false,
	speed: 700,
	responsive: [{

		breakpoint: 1200,
		settings: {
			slidesToShow: 5,
		}
	},

	{
		breakpoint: 992,
		settings: {
			slidesToShow: 4,
		}
	},

	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
		}

	},

	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
		}

	}
	]
});
$('.deals-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 2000,
	arrows: false,
	dots: true,
	focusOnSelect: false,
	speed: 700,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},

		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
$('.test-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 2000,
	arrows: true,
	dots: false,
	focusOnSelect: false,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				arrows: false,
				dots: true
			}
		}
	]
});
$('.work-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	infinite: true,
	autoplaySpeed: 1000,
	arrows: true,
	dots: false,
	focusOnSelect: false,
	speed: 700,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},

		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}
	]
});
/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function () {

	var offset = 900;
	var duration = 800;

	$(window).scroll(function () {

		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		}
		else {
			$('.back-to-top').fadeOut(duration);
		}

	});

	$('.back-to-top').click(function (event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, duration);

		return false;
	});

});
