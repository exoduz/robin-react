import React from 'react';

import Image from '../Helpers/Image';
import BootstrapRow from './../Helpers/BootstrapRow';
import BootstrapColumn from './../Helpers/BootstrapColumn';

class Projects extends React.Component {
	render() {
		return (
			<section id="projects">
				<div className="container">
		      <BootstrapRow>
		        <BootstrapColumn classes={ "col-md-12" }>
		          <h2>Personal Projects</h2>
		        </BootstrapColumn> {/* .col-md-12 */}
		      </BootstrapRow>

		      <BootstrapRow>
		      	<BootstrapColumn classes={ "col-md-7" }>
		      		Hello
		      	</BootstrapColumn> {/* .col-md-9 */}
		      	<BootstrapColumn classes={ "col-md-5" }>
		      		<img src="assets/img/projects-robin-website.png" alt="Robin's Website" className="img-responsive" />
		      	</BootstrapColumn> {/* .col-md-3 */}
		      </BootstrapRow>

		      <BootstrapRow>
		      	<BootstrapColumn classes={ "col-md-7 col-md-push-5" }>
		      		Hello
		      	</BootstrapColumn> {/* .col-md-9 */}
		      	<BootstrapColumn classes={ "col-md-5 col-md-pull-7" }>
		        	<img src="assets/img/projects-jerry-website.png" alt="Jerry's Website" className="img-responsive" />
		        </BootstrapColumn> {/* .col-md-3 */}
		      </BootstrapRow>
		    </div>{/* .container */}
		 	</section>
		)
	}
}

export default Projects