import React from 'react';

class ProgressBarLanguages extends React.Component {
	render() {
		
		var data = this.props.data,
			name = data.name,
			proficiency = data.proficiency,
			level = data.level;

		return (
			<div className="progress">
        <div className="progress-bar { name.toLowerCase() }" role="progressbar" aria-valuenow={ level } aria-valuemin="0" aria-valuemax="100">
          { name } ({ proficiency })
        </div>
      </div>
		)
	}
}

ProgressBarLanguages.defaultProps = {
  data: {}
};

ProgressBarLanguages.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default ProgressBarLanguages;