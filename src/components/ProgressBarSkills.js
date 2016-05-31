import React from 'react';

class ProgressBarSkills extends React.Component {
	render() {
		
		var data = this.props.data,
			name = data.name,
			class_name = data.class_name,
			level = data.level;

		return (
			<div className="progress">
        <div className="progress-bar { class_name.toLowerCase() }" role="progressbar" aria-valuenow={ level } aria-valuemin="0" aria-valuemax="100">
          { name }
        </div>
      </div>
		)
	}
}

ProgressBarSkills.defaultProps = {
  data: {}
};

ProgressBarSkills.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default ProgressBarSkills;