import React from 'react';

class TimelineContent extends React.Component {
	render() {
		var { type, desc, date } = this.props.data;

		if (type === 'work') { //work
			var { company, role, location } = this.props.data

			return (
	      <div className="timeline-block">
	        <div className="timeline-img work">
	          <i className="fa fa-laptop fa-2x"></i>
	        </div> {/* timeline-img */}
	     
	        <div className="timeline-content work">
	          <h3>{ company }</h3>
	          <h4>{ role }</h4>
	          <h5>{ location }</h5>
	          { desc ? desc.map((value, index) => <p key={ index }>{ value }</p>) : '' }
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
       
          <div className="timeline-content location">
            <h4><span className="date">{ date }</span> { desc }</h4>
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