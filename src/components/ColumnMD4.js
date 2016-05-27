import React from 'react';

import ProgressBar from './ProgressBar';

class ColumnMD4 extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				{ this.props.children }
			</div>
		)
	}
}

export default ColumnMD4;