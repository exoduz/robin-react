import React from 'react';
import ReactDOM from 'react-dom';

/**
 3rd party scripts
*/
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
require('../../node_modules/waypoints/lib/jquery.waypoints.js');

/**
 CSS
*/
require('normalize-css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/font-awesome/css/font-awesome.css');
require('./../css/style.css');
require('./../css/print.css');

/**
 React components
*/
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Timeline from './Timeline/Timeline';
import OtherInformation from './OtherInformation/OtherInformation';
import Social from './Social/Social';
import ContactForm from './ContactForm/ContactForm';
import Thanks from './Thanks/Thanks';
import Footer from './Layout/Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Hero />
				<Skills />
				<Timeline />
				<OtherInformation />
				<Social />
				<ContactForm />
				<Thanks />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#main'));

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

});
