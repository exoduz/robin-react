import React from 'react';

class ContactForm extends React.Component {
	render() {
		return (
			<section id="contact">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h2 className="text-center">Drop me a line and say hi</h2>
		        </div>{/* .col-md-12 */}

		        <div className="col-md-8 col-md-offset-2">
		          <form id="home-contact-form" action="submit_home_contact_form">
		            <h4>I need all the following information from you.</h4>
		            <div className="form-group row">
		              <label for="name" className="sr-only">Name</label>
		                <input type="text" className="form-control input-lg" id="name" name="name" placeholder="A name to address you..." required />
		              </div>
		              <div className="form-group row">
		              <label for="email" className="sr-only">Email</label>
		                <input type="email" className="form-control input-lg" id="email" name="email" placeholder="An email to contact you back on..." required />
		              </div>
		              <div className="form-group row">
		              <label for="message" className="sr-only">Message</label>
		                <textarea className="form-control" id="message" name="message" placeholder="So, what's on your mind?" required></textarea>
		              </div>
		              <div className="btn-container text-center">
		                <button type="submit" className="btn btn-submit btn-lg btn-success-outline" data-loading-text="<i className='fa fa-circle-o-notch fa-spin'></i> Sending...">Send</button>
		              </div>
		          </form>
		        </div>{/* .col-md-12 */}
		      </div>{/* .row */}
		    </div>{/* .container */}
		  </section>
		)
	}
}


export default ContactForm;