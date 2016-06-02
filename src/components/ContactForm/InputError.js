import React from 'react';

class InputError extends React.Component {
	render() {
		return (
			<label id="name-error" className="error" for="name">This field is required.</label>
		)
	}
}


export default InputError;