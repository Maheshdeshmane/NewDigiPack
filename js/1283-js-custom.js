jQuery( document ).ready(function($) {
	$(".fancybox").fancybox();
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
	var homeslider = jQuery('#owl-homeslider');
   homeslider.owlCarousel({
		animateOut: 'fadeOut',    
		items:1,
		margin:0,
		stagePadding:0,
		smartSpeed:450,
		nav:false,
		navText : ["<i class='fa  fa-chevron-left'></i>","<i class='fa  fa-chevron-right'></i>"],
		autoplay:true,
		autoplayTimeout:4000,
		loop:true,
		lazyLoad:true,
		dots:true,
		callbacks: true
		
	});
	homeslider.on('changed.owl.carousel', function(event){ 
    	// Do something
    	jQuery("#pre-div").hide();
		jQuery('#owl-homeslider').trigger('play.owl.autoplay',[4000]);
	});
	
	jQuery('#owl-homecta').owlCarousel({		  
		items:4,
		margin:30,
		stagePadding:0,
		nav:true,
		navText : ["<i class='fa  fa-chevron-left'></i>","<i class='fa  fa-chevron-right'></i>"],
		dots:false,
		autoplay:true,
		rewind:true,
		responsive:{
			0:{
				items:1
				
			},
			480:{
				items:2
			},
			600:{
				items:3
			},
			1024:{
				items:4
				
			}
		},	
	});
	jQuery('#owl-homeProducts').owlCarousel({		  
		items:6,
		margin:0,
		stagePadding:0,
		nav:false,
		navText : ["<i class='fa  fa-chevron-left'></i>","<i class='fa  fa-chevron-right'></i>"],
		dots:true,
		autoplay:true,
		rewind:true,
		responsive:{
			0:{
				items:2
				
			},
			480:{
				items:2
			},
			600:{
				items:4
			},
			1024:{
				items:6
				
			}
		},	
	});
	jQuery('#owl-homeourclients').owlCarousel({		  
		items:5,
		margin:0,
		stagePadding:0,
		nav:false,
		navText : ["<i class='fa  fa-chevron-left'></i>","<i class='fa  fa-chevron-right'></i>"],
		dots:true,
		autoplay:true,
		rewind:true,
		responsive:{
			0:{
				items:2
				
			},
			480:{
				items:2
			},
			600:{
				items:4
			},
			1024:{
				items:5
				
			}
		},	
	});
	
	
	jQuery('#owl-hometestimonials').owlCarousel({		  
		items:1,
		margin:0,
		stagePadding:0,
		nav:false,
		navText : ["<i class='fa  fa-chevron-left'></i>","<i class='fa  fa-chevron-right'></i>"],
		dots:true,
		autoplay:true,
		rewind:true,
		autoplayTimeout:4000,
	});
	
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