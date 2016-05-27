import React from 'react';

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
		        <div className="row">
		          <div className="col-md-6">
		            Copyright &copy; { this.getYear() } Robin Roy Julius ( <a href="mailto:me@robinjulius.com">me@robinjulius.com</a> )
		          </div>{/* .col-md-6 */}
		        </div>{/* .row */}
		      </section>{/* #copyright */}
		    </div>{/* .container */}
		  </footer>
		)
	}
}

export default Footer;