import React from 'react';

import BootstrapRow from './../Helpers/BootstrapRow';
import BootstrapColumn from './../Helpers/BootstrapColumn';

class Social extends React.Component {
	render() {
		return (
		  <section id="social">
		    <div className="container">
		      <BootstrapRow>
		        <BootstrapColumn classes={ "col-md-4 title" }>
		          <h3>I'm quite sociable</h3>
		        </BootstrapColumn>{/* .col-md-5 */}

		        <BootstrapColumn classes={ "col-md-8 social-icons"}>
		          <div className="social-icon-effect">
		            <a href="https://linkedin.com/in/robinjulius" target="_blank" className="social-icon-wrap social-icon linkedin"><i className="fa fa-linkedin fa-3x"></i></a>
		            <a href="https://twitter.com/exo_duz" target="_blank" className="social-icon-wrap social-icon twitter"><i className="fa fa-twitter fa-3x"></i></a>
		            <a href="https://instagram.com/exo_duz" target="_blank" className="social-icon-wrap social-icon instagram"><i className="fa fa-instagram fa-3x"></i></a>
		            <a href="https://github.com/exoduz" target="_blank" className="social-icon-wrap social-icon github"><i className="fa fa-github fa-3x"></i></a>
		          </div>{/* .social-icon-effect */}
		        </BootstrapColumn>{/* .col-md-4 title */}
		      </BootstrapRow>
		    </div>{/* .container */}
		  </section>
		)
	}
}

export default Social;