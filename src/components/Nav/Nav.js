import React from 'react';

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<ul>
					<li><a href="#top" className="smooth-link">Introduction</a></li>
					<li><a href="#skills" className="smooth-link">Skills</a></li>
					<li><a href="#projects" className="smooth-link">Personal Projects</a></li>
					<li><a href="#timeline" className="smooth-link">Professional Experience</a></li>
					<li><a href="#other-info" className="smooth-link">Other Information</a></li>
					<li><a href="#social" className="smooth-link">Social</a></li>
					<li><a href="#contact" className="smooth-link">Contact</a></li>
					<li><a href="#my-location" className="smooth-link">My Location</a></li>
					<li><a href="#thanks" className="smooth-link">Thanks</a></li>
				</ul>
			</nav>
		)
	}
}

export default Nav;