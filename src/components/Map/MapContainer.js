import React from 'react';

import MyLocationMap from './MyLocationMap';

class MapContainer extends React.Component {
	render() {
		return (
			<section id="my-location">
				<MyLocationMap />
			</section>
		)
	}
}

export default MapContainer;