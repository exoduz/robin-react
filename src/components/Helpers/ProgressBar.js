import React from 'react';

class ProgressBar extends React.Component {
	render() {
		var type = this.props.type;

		if (type === 'skills') { //skills
			var { name, class_name, level } = this.props.data;

			return (
				<div className="progress">
	        <div className="progress-bar { class_name.toLowerCase() }" role="progressbar" aria-valuenow={ level } aria-valuemin="0" aria-valuemax="100">
	          { name }
	        </div>
	      </div>
			)
		} else { //languages
			var { name, proficiency, level } = this.props.data;

			return (
				<div className="progress">
	        <div className="progress-bar { name.toLowerCase() }" role="progressbar" aria-valuenow={ level } aria-valuemin="0" aria-valuemax="100">
	          { name } ({ proficiency })
	        </div>
	      </div>
			)
		}
	}
}

ProgressBar.defaultProps = {
	type: "languages",
  data: {}
};

ProgressBar.propTypes = {
	type: React.PropTypes.string.isRequired,
	data: React.PropTypes.object.isRequired
}

export default ProgressBar;