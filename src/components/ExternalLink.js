import React from 'react';

class ExternalLink extends React.Component {
	render() {
		var data = this.props.data,
			url = data.link_url,
			text = data.text,
			class_name = data.class_name;

		return (
			<a href={ url } target="_blank" className={ "btn btn-external-link " + class_name } role="button">
				 <span dangerouslySetInnerHTML={{ __html: text }} />
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