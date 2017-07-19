$(document).ready(function(){
	// initialize countdown script
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$(this).html(event.strftime(
				'<li>%D</li>'
	       		+ '<li>days</li>'
	       		+ '<li>%H</li>'
	       		+ '<li>hours</li>'
	       		+ '<li>%M</li>'
	      		+ '<li>min</li>'
	       		+ '<li>%S</li>'
	       		+ '<li>sec</li>'
			));
		});
	});

	//adds box shadow to input forms when focused
	$("input").focusin(function(){
		$(this).parent(".input-group").removeClass("newsletter-focus").addClass("newsletter-focus");
	});

	//removes box shadow from input forms when out of focus
	$("input").focusout(function(){
		$(this).parent(".input-group").removeClass("newsletter-focus");
	});

	$("textarea").focusin(function(){
		$(this).parent(".form-group").removeClass("newsletter-focus").addClass("newsletter-focus");
	});

	$("textarea").focusout(function(){
		$(this).parent(".form-group").removeClass("newsletter-focus");
	});
});

// make's sure the home and contact pages remain vertically centerd when the window resizes
$( window ).resize(function(){
	$("#home-page").centerPage();
	// hides the sidebar when the page is viewed on small screens
	toggleSidebar();
});

$(window).load(function(){
	toggleSidebar();
});

// ************* Helper Functions **************

//vertically centers the page
$.fn.centerPage = function(){
	windowHeight = $(window).height();
	divHeight = $(this).height();
	topMargin = windowHeight/2 - divHeight/2 - 65;
	$(this).css("margin-top", topMargin);
}

// hides sidebar on small screens
function toggleSidebar(){
	width = $(window).width();
	if(width < 768){
		$(".sidebar").hide();
	}else if(width >= 768){
		$(".sidebar").show();
	}
}
