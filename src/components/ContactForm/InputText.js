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
			errorMessage: ''
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
			results = '';

		results = this.props.onBlur(e.target.value, validate); //pass value and validation methods to parent onBlur function
		results ? this.setState({ error: true, errorMessage: this.props.validate[results]['errorMessage'] }) : this.setState({ error: false }); //set error flag
	}

	render() {
		return (
			<FormRow rowClass={ 'form-group row' }>
        <Label forInput={ this.props.name }>Name</Label>
				<input
					type="text"
					className={ "form-control input-lg" + " " + (this.state.error ? 'error' : '') }
					id={ this.props.name }
					name={ this.props.name }
					placeholder={ this.props.placeholder }
					value={ this.state.value }
					onChange={ this.handleChange }
					onBlur={ this.handleBlur }
					required
				/>

				{ this.state.error ? <InputError errorMessage={ this.state.errorMessage } /> : '' }
      </FormRow>
		)
	}
}
/*
InputText.defaultProps = {
  data: {}
};

InputText.propTypes = {
	data: React.PropTypes.object.isRequired
}
*/

export default InputText;