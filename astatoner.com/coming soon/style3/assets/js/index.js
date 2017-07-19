$(document).ready(function(){
	// initialize countdown script
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$(this).html(event.strftime(
				'<li><span class="digit">%D</span><span class="time">days</span></li>'
	       		+ '<li><span class="digit">%H</span><span class="time">hours</span></li>'
	       		+ '<li><span class="digit">%M</span><span class="time">min</span></li>'
	       		+ '<li><span class="digit">%S</span><span class="time">sec</span></li>'
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
