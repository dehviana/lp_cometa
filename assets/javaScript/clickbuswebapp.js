jQuery(document).ready(function () {

	jQuery('#originPlace').on('focus', function() {
	   jQuery('body').css("overflow","hidden");
	   document.body.scrollTop = jQuery(this).offset().top;
	   jQuery('body').css("overflow","scroll");
	   
	});

	jQuery('#destinationPlace').on('focus', function() {
	   jQuery('body').css("overflow","hidden");
	   document.body.scrollTop = jQuery(this).offset().top;
	   jQuery('body').css("overflow","scroll");
	});

	jQuery('#departureDate').on('focus', function() {
		jQuery('body').css("overflow","hidden");
		document.body.scrollTop = jQuery(this).offset().top;
		jQuery('body').css("overflow","scroll");
	});

});