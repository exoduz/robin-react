import React from 'react';


class BootstrapColumn extends React.Component {
	render() {
		const { id, classes } = this.props;
		
		return (			
			<div id={ id } className={ classes }>
				{ this.props.children }
			</div>
		)
	}
}

BootstrapColumn.defaultProps = {
  id: '',
  classes: ''
};

export default BootstrapColumn;