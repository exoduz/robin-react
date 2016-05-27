$(document).ready(function() {
	//smooth scrolling
	$('a.smooth-link').on('click', function(e) {
		e.preventDefault();
		
		var target = $(this).context.hash;
		$('html, body').animate({
	        scrollTop: $(target).offset().top
	    }, 800);
	});

	//timeline animation
	var timelineBlocks = $('.timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop() + $(window).height() * offset ) && $(this).find('.timeline-img, .timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-img').hasClass('is-hidden') ) && $(this).find('.timeline-img, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	//progress bars
	var progressBar = $('.progress-bar');
	progressBar.css('width', 0);

	//animate progress bar when it comes into view
	var waypoints = progressBar.waypoint(function(direction) {
		$(this).each(function(indx) {
			var el = $(this.element);
			el.css("width", el.attr("aria-valuenow") + "%");
		});
	}, {
		triggerOnce: true,
		offset: 'bottom-in-view'
	});

	//ajax contact form
	var submitButton = $("#contact .btn-submit");
	submitButton.button('reset');

	$("#home-contact-form").validate({
		invalidHandler: function(event, validator) {
		    
		},
		submitHandler: function(form) {
			var data = $(form).serialize(); //gimme values from form
			data += "&action=submit_home_contact_form"; //add the address so wp_ajax can work

			submitButton.button('loading');

	    	$.post(
			    ajaxUrl.address,
			    data,
			    function(response){
			        if (response === "ok") {
			        	//success
			        	form.reset();
			        	submitButton.text("Email Sent").addClass('success');
			        	setTimeout(function() {
			        		submitButton.removeClass('success').button('reset'); //reset text after 1.5secs
			        	}, 1500);
			        } else {
			        	//uh oh!
			        	submitButton.html("Something went wrong. Please try again.").addClass('error');
			        	setTimeout(function() {
			        		submitButton.removeClass('error').button('reset'); //reset text after 1.5secs
			        	}, 1500);
			        }
			    }
			);
	  	}
	});

});
