import React from 'react';

class Label extends React.Component {
	render() {
		return (
			<div htmlFor={ this.props.forInput } className="sr-only">
				{ this.props.children }
			</div>
		)
	}
}


export default Label;