import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

//CSS files
require('normalize-css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/font-awesome/css/font-awesome.css');
require('./../css/style.css');
require('./../css/print.css');

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