import React from 'react';

import FormRow from './FormRow';
import InputText from './InputText';
import Validate from '../Helpers/Validate'

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleBlur(value, validation) {
		var isValid = true;

		validation.map((validate) => {
			if (validate === 'isRequired') {
				isValid = Validate.isRequired(value);
			}

			if (validate === 'isEmail') {
				isValid = Validate.isEmail(value);
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		var name = this.state.name.trim(),
			email = this.state.email.trim(),
			message = this.state.message.trim();
	
		if (!name || !email || !message) { return; }

		//#TODO send request to server

		this.setState({
			name: '',
			email: '',
			message: ''
		});
	}

	render() {
		return (
			<section id="contact">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h2 className="text-center">Drop me a line and say hi</h2>
		        </div>{/* .col-md-12 */}

		        <div className="col-md-8 col-md-offset-2">
		          <form id="home-contact-form" onSubmit={ this.handleSubmit }>
		            <h4>I need all the following information from you.</h4>
		            
		            <InputText name={ 'name' } placeholder={ 'A name to address you...' } value={ this.state.name } validate={ ['isRequired', 'isEmail'] } onBlur={ this.handleBlur } />

								{/*
		            <FormRow rowClass={ 'form-group row' }>
		              <Label forInput={ 'name' }>Name</Label>
									<input type="text" className="form-control input-lg" id="name" name="name" placeholder="A name to address you..." onChange={ (e) => { this.setState({ name: e.target.value }) }} value={ this.state.name } required />
	              </FormRow>

	              <FormRow rowClass={ 'form-group row' }>
		              <Label forInput={ 'email' }>Email</Label>
									<input type="email" className="form-control input-lg" id="email" name="email" placeholder="An email to contact you back on..." onChange={ (e) => { this.setState({ email: e.target.value }) }} value={ this.state.email } required />
	              </FormRow>
	              
	              <FormRow rowClass={ 'form-group row' }>
		              <Label forInput={ 'message' }>Message</Label>
									<textarea className="form-control" id="message" name="message" placeholder="So, what's on your mind?" onChange={ (e) => { this.setState({ message: e.target.value }) }} value={ this.state.message } required></textarea>
	              </FormRow>
	              */}
	              <FormRow rowClass={ 'btn-container text-center' }>
									<button type="submit" className="btn btn-submit btn-lg btn-success-outline" data-loading-text="<i className='fa fa-circle-o-notch fa-spin'></i> Sending...">Send</button>
								</FormRow>
		          
		          </form>
		        </div>{/* .col-md-8 .col-md-offset-2 */}
		      </div>{/* .row */}
		    </div>{/* .container */}
		  </section>
		)
	}
}


export default ContactForm;