jQuery( document ).ready(function($) {
	
	jQuery("#cssmenu").menumaker({
		title: "Menu",
		breakpoint: 979, 	
		format: "multitoggle"
	});
	
	jQuery("#menubtn").click(function(){
		jQuery("#menu-button").click();
		jQuery("#menubtn").toggleClass('open');	
		
	});	
	
});
jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 100) {
       jQuery('header#masthead').addClass('fixed-header');
	   jQuery('body').css('padding-top','209px');
    }
    else {
       jQuery('header#masthead').removeClass('fixed-header');
	   jQuery('body').css('padding-top','0');
    }
});




jQuery(document).ready(function(){
	if (jQuery('#back-to-top').length) {		
        var scrollTrigger = 100,
            backToTop = function() {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > scrollTrigger) {
					jQuery('#back-to-top').addClass('show');
                } else {
                    jQuery('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        jQuery(window).on('scroll', function() {
            backToTop();
        });
        jQuery('#back-to-top').on('click', function(e) {
            e.preventDefault();
            jQuery('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }	
 });