import React from 'react';


class BootstrapRow extends React.Component {
	render() {
		const { id, classes } = this.props;

		return (
			<div id={ id } className={ 'row ' + classes }>
				{ this.props.children }
			</div>
		)
	}
}

BootstrapRow.defaultProps = {
  id: '',
  classes: ''
};

export default BootstrapRow;