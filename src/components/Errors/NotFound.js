import React from 'react';

class NotFound extends React.Component {
	render() {
		return (
			<div id="not-found">
				<div>
					<h1>Not Found (404)</h1>
					<h3>I'm not really sure where it's gone. =P</h3>
					<p>Let's just <a href='/'>go home <i className="fa fa-external-link"></i></a> and forget it ever happened.</p>
				</div>
			</div>
		)
	}
}

export default NotFound;