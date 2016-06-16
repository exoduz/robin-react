import React from 'react';
import GoogleMap from 'google-map-react';

import MyCurrentLocation from './MyCurrentLocation';

class MyLocationMap extends React.Component {
	constructor(props) {
		super(props);
	}

	_mapOptions() {
		return {
			panControl: false,
			draggable: false,
      mapTypeControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
		}
	}

	render() {
		return (
			<div id="map">
				<GoogleMap
					bootstrapURLKeys={{
				    key: this.props.key,
				  }}
	        defaultCenter={ this.props.center }
	        defaultZoom={ this.props.zoom }
	        options={ this._mapOptions() }
	       >
	       	<MyCurrentLocation { ...this.props.currentLocation } text={ 'Currently in this vicinity. If not, then I\'m seriously lost...' } />
	        </GoogleMap>
       </div>
		)
	}
}

MyLocationMap.defaultProps = {
	key: 'AIzaSyBUhAgNodobG0Ot2lXqDsaVkrBuYSENTxM',
  center: { lat: 37.8313, lng: -122.2852 }, //Emeryville
  currentLocation: { lat: 37.8700, lng: -122.2927 }, //Berkeley
  zoom: 11
};

MyLocationMap.propTypes = {
	key: React.PropTypes.string.isRequired,
	center: React.PropTypes.array,
  zoom: React.PropTypes.int
}

export default MyLocationMap;