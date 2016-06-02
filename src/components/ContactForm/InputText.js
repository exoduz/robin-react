import React from 'react';

import FormRow from './FormRow';
import Label from './Label';
import InputError from './InputError';

class InputText extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value || '',
			error: false,
			errorMessage: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e);
		this.setState({ value: e.target.value })
	}

	handleBlur(e) {
		var validate = this.props.validate,
			results = {};

		results = this.props.onBlur(e.target.value, validate); //pass value and validation methods to parent onBlur function

		//iterate through the results and see if it passes validation
		Object.keys(results).map((index) => {
			var passValidation = results[index]; //true: passed validation, false: failed validation
			passValidation ? this.setState({ error: false }) : this.setState({ error: true }); //set error flag
		});
	}

	render() {
		return (
			<FormRow rowClass={ 'form-group row' }>
        <Label forInput={ this.props.name }>Name</Label>
				<input
					type="text"
					className={ "form-control input-lg " + (this.state.error ? 'error' : '') }
					id={ this.props.name }
					name={ this.props.name }
					placeholder={ this.props.placeholder }
					value={ this.state.value }
					onChange={ this.handleChange }
					onBlur={ this.handleBlur }
					required
				/>

				{ this.state.error ? <InputError /> : '' }
      </FormRow>
		)
	}
}


export default InputText;