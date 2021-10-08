$(document).ready(function () {
	PopUpHide();
});

function PopUpHide(speed) {
	$(".header__nav_inner-popup").hide(speed);
}

$(".header__burger").on("click", function () {
	$(".header__nav_inner-popup").toggle(200);
});


$(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top,
				}, 1000);
				return false;
			}
		}
	});
});
