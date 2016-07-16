import React from 'react';

import BootstrapRow from './../Helpers/BootstrapRow';
import BootstrapColumn from './../Helpers/BootstrapColumn';

class Projects extends React.Component {
	render() {
		return (
			<section id="projects">
				<div className="container">
		      <BootstrapRow>
		        <BootstrapColumn classes={ "col-md-12" }>
		          <h2 className="text-center">Personal Projects</h2>
		        </BootstrapColumn> {/* .col-md-12 */}
		      </BootstrapRow>
		    </div>{/* .container */}
		 	</section>
		)
	}
}

export default Projects