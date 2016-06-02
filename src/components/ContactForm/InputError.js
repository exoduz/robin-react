import React from 'react';

class InputError extends React.Component {
	render() {
		return <label id="name-error" className="error" for="name">{ this.props.errorMessage }</label>;
	}
}

InputError.defaultProps = {
  errorMessage: 'This input is invalid.'
};

InputError.propTypes = {
	errorMessage: React.PropTypes.string.isRequired
}

export default InputError;