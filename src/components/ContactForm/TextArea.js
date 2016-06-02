import React from 'react';

import FormRow from './FormRow';
import Label from './Label';
import InputError from './InputError';

class TextArea extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value || '',
			field: '',
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
			result = '';
		result = this.props.onBlur(e.target.value, validate); //pass value and validation methods to parent onBlur function
		result ? this.setState({ field: this.props,name, error: true, errorMessage: this.props.validate[result]['errorMessage'] }) : this.setState({ field: '', error: false, errorMessage: '' }); //set error flag
	}

	render() {
		return (
			<FormRow rowClass={ 'form-group row' }>
        <Label forInput={ this.props.name }>Name</Label>
				<textarea
					className={ this.props.class_name + " " + (this.state.error ? 'error' : '') }
					id={ this.props.name }
					name={ this.props.name }
					value={ this.state.value }
					placeholder={ this.props.placeholder }
					onChange={ this.handleChange }
					onBlur={ this.handleBlur }
					required={ 'isRequired' in this.props.validate ? 'required' : '' } //isRequired tag present, output HTML5 tag
				/>

				{ this.state.error ? <InputError forInput={ this.props.name }>{ this.state.errorMessage }</InputError> : '' }
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