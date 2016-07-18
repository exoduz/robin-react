import React from 'react';

import BootstrapRow from './../Helpers/BootstrapRow';
import BootstrapColumn from './../Helpers/BootstrapColumn';
import Image from '../Helpers/Image';
import ExternalLink from './../Helpers/ExternalLink';

class Projects extends React.Component {
	render() {
		return (
			<section id="projects">
				<div className="container">
					<h2 className="text-center">Personal Projects</h2>

					<BootstrapRow>
						<BootstrapColumn classes={ 'col-md-6' }>
			      	<div className="project-item">
				      	<img src="assets/img/projects-robin-website.png" alt="Robin's Website" className="img-responsive" />
				      	<div className="text">
				      		<h3>Robin's Personal Website</h3>
				      		<p>After studying ReactJS for a few weeks, I decided to take this opportunity to change my personal site from WordPress to ReactJS.</p>
				      		<p>
				      			<span className="label">ReactJS</span>
				      			<span className="label">jQuery</span>
				      			<span className="label">Webpack</span>
				      		</p>

				      		<div className="button">
				      			<ExternalLink data={{
				      				link_url: 'https://github.com/exoduz/robin-react',
											text: 'Download source on Github',
											icon: 'fa fa-github',
											class_name: 'btn-blue'
				      			}} />
				      		</div>{/* .button */}
				      	</div>{/* .text */}
			      	</div>{/* .project-item */}
			      </BootstrapColumn>{/* .col-sm-6 */}

						<BootstrapColumn classes={ 'col-md-6' }>
			      	<div className="project-item clearfix">
								<img src="assets/img/projects-jerry-website.png" alt="Jerry's Website" className="img-responsive" />
								<div className="text">
				      		<h3>Jerry's Portfolio Website</h3>
				      		<p>Originally this was written in vanilla PHP, but I was on a roll so I decided to also rewrite it in ReactJS.</p>
				      		<p>
				      			<span className="label">ReactJS</span>
				      			<span className="label">jQuery</span>
				      			<span className="label">Webpack</span>
				      		</p>

				      		<div className="button">
				      			<ExternalLink data={{
				      				link_url: 'https://github.com/exoduz/jerry-react',
											text: 'Download source on Github',
											icon: 'fa fa-github',
											class_name: 'btn-blue'
				      			}} />
				      		</div>{/* .button */}
				      	</div>{/* .text */}
			      	</div>{/* .project-item */}
		      	</BootstrapColumn>{/* .col-sm-6 */}
	      	</BootstrapRow>
		    </div>{/* .container */}
		 	</section>
		)
	}
}

export default Projects