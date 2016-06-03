import React from 'react';
import update from 'immutability-helper';

import FormRow from './FormRow';
import InputText from './InputText';
import TextArea from './TextArea';
import Validate from './../Helpers/Validate'

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: {
				value: '',
				valid: true,
				errorMessage: ''
			},
			email: {
				value: '',
				valid: true,
				errorMessage: ''
			},
			message: {
				value: '',
				valid: true,
				errorMessage: ''
			}
		};

		this.handleBlur = this.handleBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/**
	 All data stored here
	 @param key { string } Key to return part of object
	*/
	_getData(key) {
		var fields = {
			name: {
				type: 'text',
				fieldName: 'name',
				placeholder: 'A name to address you...',
				class_name: 'form-control input-lg',
				validation: {
      		isRequired: {
        		errorMessage: 'This field is required.'
      		}
      	}
			},
			email: {
				type: 'email',
				fieldName: 'email',
				placeholder: 'An email to contact you...',
				class_name: 'form-control input-lg',
				validation: {
      		isRequired: {
        		errorMessage: 'This field is required.'
      		},
        	isEmail: {
        		errorMessage: 'Please enter a valid email address.'
      		}
      	}
      },
      message: {
				type: 'textarea',
				fieldName: 'message',
				placeholder: 'So, what\'s on your mind?',
				class_name: 'form-control',
				validation: {
      		isRequired: {
        		errorMessage: 'This field is required.'
      		}
      	}
			}
		}

		return key ? fields[key] : fields;
	}

	handleBlur(field, value, validation) {
		var isValid = true,
			rules = Object.keys(validation),
			results = null;

		for (var i = 0; i < rules.length; i++) {
			var rule = rules[i],
				result = Validate[rule](value);

			if (!result) { //error found
				this.setState({
					[field]: {
						valid: false,
						errorMessage: this._getData(field).validation[rule].errorMessage //get error message
					}
				});
				return rule; //return/break on first error
			}
		}
	}

	handleChange(e) {
		var name = e.target.name,
			value = e.target.value;

		//use immutability-helper to update value without losing the others in the object
		//http://stackoverflow.com/a/24900248/3940083
		var newState = update(this.state[name], { value: { $set: value} });
		this.setState(newState);
		console.log(this.state.name);
	}

	handleSubmit(e) {
		e.preventDefault();

		//#TODO validate again on submit pressed
		//check state is there's error
		//check against data, if there's error, send it back to form

		/*
		var name = this.state.name.value.trim(),
			email = this.state.email.value.trim(),
			message = this.state.message.value.trim();
		
		if (!name || !email || !message) { return; }
		*/

		//#TODO send request to server
		/*
		this.setState({
			name: {
				value: '',
				valid: true,
				errorMessage: ''
			},
			email: {
				value: '',
				valid: true,
				errorMessage: ''
			},
			message: {
				value: '',
				valid: true,
				errorMessage: ''
			}
		});
		*/
	}

	/**
	 Render fields
	 @param key { string } Key to return part of object
	*/
	renderFields(key) {
		var data = this._getData(key),
			ret = null;

		if (data.type === 'textarea') {
			ret = <TextArea
				key={ data.fieldName }
      	name={ data.fieldName }
      	placeholder={ data.placeholder }
      	value={ this.state[key].value }
      	class_name={ data.class_name }
      	validate={ data.validation }
      	valid={ this.state[key].valid }
		    errorMessage={ this.state[key].errorMessage }
      	onBlur={ this.handleBlur }
      	onChange={ this.handleChange }
      />
		} else {
			ret = <InputText
				key={ data.fieldName }
      	name={ data.fieldName }
      	placeholder={ data.placeholder }
      	value={ this.state[key].value }
      	class_name={ data.class_name }
      	validate={ data.validation }
      	valid={ this.state[key].valid }
		    errorMessage={ this.state[key].errorMessage }
      	onBlur={ this.handleBlur }
      	onChange={ this.handleChange }
      />
		}

		return ret;
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
		            
								{ Object.keys(this._getData()).map(key => this.renderFields(key)) }		            

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