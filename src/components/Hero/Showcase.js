import React from 'react';

import Image from '../Helpers/Image';
import ExternalLink from '../Helpers/ExternalLink';

class Showcase extends React.Component {
	renderLink(obj, key) {
		return <ExternalLink key={ key } data={ obj } />;
	}

	render() {
		var data = this.props.data,
			class_name = data.class_name,
			desc = data.desc,
			logo = data.logo,
			image = data.image,
			link = data.link;

		return (
			<div className={ 'showcase ' + class_name }>
        <div className="text">
          <Image data={ logo } />
          <p>
          	{ this.props.children }
          </p>

					{ Object.keys(data.link).map((key) => this.renderLink(link[key], key)) }
        </div>
        <Image data={ image } />
      </div>
		)
	}
}

Showcase.defaultProps = {
  data: {}
};

Showcase.propTypes = {
	data: React.PropTypes.object.isRequired
}

export default Showcase;