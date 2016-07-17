import React from 'react';

class ExternalLink extends React.Component {
	render() {
		var { link_url, text, icon, class_name } = this.props.data;

		return (
			<a href={ link_url } target="_blank" className={ "btn btn-external-link " + class_name } role="button">
				 { text } { icon ? <i className={ icon }></i> : '' }
			</a>
		)
	}
}

ExternalLink.defaultProps = {
  data: {}
};

ExternalLink.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default ExternalLink;