import React from 'react';
import ReactDOM from 'react-dom';

/**
 3rd party scripts
*/
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
require('../../node_modules/waypoints/lib/jquery.waypoints.js');
//require('script!https://maps.googleapis.com/maps/api/js?key=AIzaSyCwXsu5MrSdkQ7kphEZbqp1WFjEj-inK7o&callback=initMap')
require('../js/app.js');

/**
 CSS
*/
require('../css/main.css');

/**
 React components
*/
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import Timeline from './Timeline/Timeline';
import OtherInformation from './OtherInformation/OtherInformation';
import Social from './Social/Social';
import Contact from './Contact/ContactForm';
import MapContainer from './Map/MapContainer';
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
				<Contact />
				<MapContainer />
				<Thanks />
				<Footer />
			</div>
		)
	}
}

export default App;
