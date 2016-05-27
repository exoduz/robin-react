import React from 'react';
import ReactDOM from 'react-dom';

import OtherInformation from './OtherInformation';
import Social from './Social';
import Thanks from './Thanks';
import Footer from './Footer';

class App extends React.Component {
	constructor() {
    super();

    this.state = {
      languages : {}
    }
  }

	render() {
		return (
			<div>
				<OtherInformation />
				<Social />
				<Thanks />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#main'));