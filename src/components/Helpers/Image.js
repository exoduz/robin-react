import React from 'react';

class Image extends React.Component {
	render() {
		var { image_url, alt, id } = this.props.data;

		return <img src={ image_url } alt={ alt } id={ id } className="img-responsive" />
	}
}

Image.defaultProps = {
  data: {}
};

Image.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Image;