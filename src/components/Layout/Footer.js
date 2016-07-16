import React from 'react';

import BootstrapRow from './../Helpers/BootstrapRow';
import BootstrapColumn from './../Helpers/BootstrapColumn';

class Footer extends React.Component {
	getYear() {
		var today = new Date(),
			year = today.getFullYear();
		return (year !== '2016' ? '2016' : '2016 - ' + year);
	}

	render() {
		return (
			<footer>
		    <div className="container">
		      <section id="copyright">
		        <BootstrapRow>
		          <BootstrapColumn classes={ "col-md-12" }>
		            Copyright &copy; { this.getYear() } Robin Roy Julius ( <a href="mailto:me@robinjulius.com">me@robinjulius.com</a> )
		          </BootstrapColumn>{/* .col-md-12 */}
		        </BootstrapRow>
		      </section>{/* #copyright */}
		    </div>{/* .container */}
		  </footer>
		)
	}
}

export default Footer;