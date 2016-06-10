import React from 'react';

class TimelineContent extends React.Component {
	render() {
		var data = this.props.data,
			type = data.type,
			desc = data.desc,
			date = data.date;

		if (type === 'work') { //work
			var company = data.company,
				role = data.role,
				location = data.location,
				desc = data.desc,
				date = data.date;

			return (
	      <div className="timeline-block">
	        <div className="timeline-img work">
	          <i className="fa fa-laptop fa-2x"></i>
	        </div> {/* timeline-img */}
	     
	        <div className="timeline-content">
	          <h3>{ company }</h3>
	          <h4>{ role }</h4>
	          <h5>{ location }</h5>
	          
	          { desc ? <ul>{ desc.map((value, index) => <li key={ index }>{ value }</li>) }</ul> : '' }

	          <span className="date">{ date }</span>
	        </div> {/* timeline-content */}
	      </div>
			)
		} else { //location
			return (
				<div className="timeline-block">
          <div className="timeline-img map-marker">
            <i className="fa fa-map-marker fa-2x"></i>
          </div> {/* timeline-img */}
       
          <div className="timeline-content">
            <h4>{ desc }</h4>
            <span className="date">{ date }</span>
          </div> {/* timeline-content */}
        </div>
			)
    }
	}
}


TimelineContent.defaultProps = {
  data: {}
};

TimelineContent.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default TimelineContent;