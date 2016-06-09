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
			},
			modified: false
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

			var newState = update(
				this.state, {
					[field]: {
						valid: { $set: (result ? true : false) },
						errorMessage: { $set: (result ? '' : this._getData(field).validation[rule].errorMessage) } //get error message		
					}
				}
			);
			this.setState(newState);

			return result ? '' : rule; //return/break on first error
		}
	}

	handleChange(e) {
		var name = e.target.name,
			value = e.target.value;

		//use immutability-helper to update value without losing the others in the object
		//also update modified flag
		//Problem: http://stackoverflow.com/questions/24898012/react-js-setstate-overwriting-not-merging
		//Solution: http://stackoverflow.com/a/24900248/3940083
		var newState = update(this.state, {
			[name]: {
				value:
				{ $set: value }
			},
			'modified': { $set: true }
		});
		this.setState(newState);
	}

	handleSubmit(e) {
		e.preventDefault();

		var name = this.state.name.value.trim(),
			email = this.state.email.value.trim(),
			message = this.state.message.value.trim();

		this.state.name.valid = false;
		this.setState({ name: { valid: false } })
		if (!this.state.modified || !name || !email || message) { //if default state or any field empty then return
			var fields = ['name', 'email', 'message'],
				currentState = this.state;

			//validate fields on submit
			fields.map(function(field) {
				if (!currentState[field].value) {
					currentState = update(
						currentState, {
							[field]: {
								valid: { $set: false },
								errorMessage: { $set: this._getData(field).validation.isRequired.errorMessage } //get error message		
							}
						}
					);
				}
			}.bind(this));

			console.log(this.state);

			return;
		}

		//valid so send email
		var form = $("#home-contact-form"),
			submitButton = $("#contact .btn-submit");
			submitButton.button('reset'),
			data = { name: name, email: email, message: message },  //values
			url = 'send_mail.php';

		submitButton.button('loading');

  	$.post(
	    url,
	    data,
	    function(response){
        if (response === "ok") {
        	//success
        	form.reset();
        	submitButton.text("Email Sent").addClass('success');
        	setTimeout(function() {
        		submitButton.removeClass('success').button('reset'); //reset text after 1.5secs
        	}, 1500);
        } else {
        	//uh oh!
        	submitButton.html("Something went wrong. Please try again.").addClass('error');
        	setTimeout(function() {
        		submitButton.removeClass('error').button('reset'); //reset text after 1.5secs
        	}, 1500);
        }
	    }
		);

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
			},
			modified: false
		});

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
				type={ data.type }
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