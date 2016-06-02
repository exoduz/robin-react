import React from 'react';

import FormRow from './FormRow';
import InputText from './InputText';
import TextArea from './TextArea';
import Validate from './../Helpers/Validate'

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			message: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleBlur(value, validation) {
		var isValid = true,
			keys = Object.keys(validation),
			results = null;

		for (var i = 0; i < keys.length; i++) {
			var key = keys[i],
				result = Validate[key](value);

			if (!result) { //error found
				return key; //return/break on first error
			}
		}
	}

	handleChange(e) {
		var name = e.target.name,
			value = e.target.value;
		
		this.setState({ [name]: { value: value } });
	}

	handleSubmit(e) {
		e.preventDefault();

		var name = this.state.name.value.trim(),
			email = this.state.email.value.trim(),
			message = this.state.message.value.trim();
		
		//#TODO validate again on submit pressed
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
		            
		            <InputText
		            	name={ 'name' }
		            	placeholder={ 'A name to address you...' }
		            	value={ this.state.name }
		            	class_name={ 'form-control input-lg' }
		            	validate={{
		            		isRequired: {
			            		errorMessage: 'This field is required.'
		            		}
		            	}}
		            	onBlur={ this.handleBlur }
		            	onChange={ this.handleChange }
		            />

		            <InputText
		            	name={ 'email' }
		            	placeholder={ 'An email to contact you back on...' }
		            	value={ this.state.email }
		            	class_name={ 'form-control input-lg' }
		            	validate={{
		            		isRequired: {
			            		errorMessage: 'This field is required.'
		            		},
			            	isEmail: {
					        		errorMessage: 'Please enter a valid email address.'
					      		}
		            	}}
		            	onBlur={ this.handleBlur }
		            	onChange={ this.handleChange }
		            />

		            <TextArea
		            	name={ 'message' }
		            	placeholder={ "So, what's on your mind?" }
		            	class_name={ 'form-control' }
		            	validate={{
		            		isRequired: {
			            		errorMessage: 'This field is required.'
		            		}
		            	}}
		            	onBlur={ this.handleBlur }
		            	onChange={ this.handleChange }
		            >
		            	{ this.state.message }
		            </TextArea>

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