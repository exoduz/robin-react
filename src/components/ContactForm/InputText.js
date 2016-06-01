import React from 'react';

import FormRow from './FormRow';
import Label from './Label';

class InputText extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value })
	}

	handleBlur(e) {
		var validate = this.props.validate;
		this.props.onBlur(e.target.value, validate); //pass value and validation methods to parent onBlur function
		this.setState({ value: e.target.value })
	}

	isRequired(value) {
		console.log(value);
	}

	render() {
		return (
			<FormRow rowClass={ 'form-group row' }>
        <Label forInput={ this.props.name }>Name</Label>
				<input
					type="text"
					className="form-control input-lg"
					id={ this.props.name }
					name={ this.props.name }
					placeholder={ this.props.placeholder }
					value={ this.state.value }
					onChange={ this.handleChange }
					onBlur={ this.handleBlur }
					required
				/>
      </FormRow>
		)
	}
}


export default InputText;