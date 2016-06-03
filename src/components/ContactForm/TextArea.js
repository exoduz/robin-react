import React from 'react';

import FormRow from './FormRow';
import Label from './Label';
import InputError from './InputError';

class TextArea extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value || ''
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
			result = '';
		result = this.props.onBlur(this.props.name, e.target.value, validate); //pass value and validation methods to parent onBlur function
	}

	render() {
		return (
			<FormRow rowClass={ 'form-group row' }>
        <Label forInput={ this.props.name }>Name</Label>
				<textarea
					className={ this.props.class_name + " " + (!this.props.valid ? 'error' : '') }
					id={ this.props.name }
					name={ this.props.name }
					placeholder={ this.props.placeholder }
					value={ this.state.value }
					valid={ this.props.valid }
					errorMessage={ this.props.errorMessage }
					onChange={ this.handleChange }
					onBlur={ this.handleBlur }
					required={ 'isRequired' in this.props.validate ? 'required' : '' } //isRequired tag present, output HTML5 tag
				/>

				{ !this.props.valid ? <InputError forInput={ this.props.name }>{ this.props.errorMessage }</InputError> : '' }
      </FormRow>
		)
	}
}

TextArea.defaultProps = {
  name: ''
};

TextArea.propTypes = {
	name: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
}

export default TextArea;