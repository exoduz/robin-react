import React from 'react';

import BootstrapRow from './../Helpers/BootstrapRow';
import BootstrapColumn from './../Helpers/BootstrapColumn';
import ProgressBar from './../Helpers/ProgressBar';

class OtherInformation extends React.Component {
	
	/**
	 All data stored here
	 @param key { string } Key to return part of object
	*/
	_content(obj, key) {
		var others = {
			languages: {
				lang1: { name: 'English', proficiency: 'Native', level: 99 },
				lang2: { name: 'Indonesian', proficiency: 'Native', level: 99 },
				lang3: { name: 'Japanese', proficiency: 'Business', level: 85 },
				lang4: { name: 'Mandarin', proficiency: 'Conversational', level: 70 },
				lang5: { name: 'Cantonese', proficiency: 'Conversational', level: 50 }
			},
			os: {
				os1: { name: 'OSX', class_name: 'osx', level: 97 },
				os2: { name: 'Windows', class_name: 'windows', level: 95 },
				os3: { name: 'Linux', class_name: 'linux', level: 75 }
			},
			software: {
				software1: { name: 'Microsoft Office', class_name: 'office', level: 99 },
				software2: { name: 'Sublime', class_name: 'sublime', level: 90 },
				software3: { name: 'Adobe Suite', class_name: 'adobe', level: 70 },
				software4: { name: 'Visual Studio Suite', class_name: 'visualstudio', level: 70 },
			}
		}

		return (obj && key ? others[obj][key] : others[obj]);
	}
	/*
	renderProgressBar(key) {
		var data = this._content(key);
		return <ProgressBar key={ key } type={ 'others' } data={ data } />;
	}
	*/
	renderProgressBar(obj, key) {
		var data = this._content(obj, key),
			type = obj !== "languages" ? 'skills' : '';
		return <ProgressBar key={ key } type={ type } data={ data } />
	}

	render() {
		return (
		  <section id="other-info">
		    <div className="container">
		      <BootstrapRow>
		        <BootstrapColumn classes={ "col-md-12" }>
		          <h2 className="text-center">Other Information</h2>
						</BootstrapColumn>{/* .col-md-12 */}
					</BootstrapRow>

      		<BootstrapRow>
		        <BootstrapColumn classes={ "col-sm-6" }>
		        	<h3>OS</h3>
							{ Object.keys(this._content('os')).map((key) => this.renderProgressBar('os', key)) }

							<h3>Software</h3>
							{ Object.keys(this._content('software')).map((key) => this.renderProgressBar('software', key)) }
		        </BootstrapColumn>{/* .col-md-6 */}

		        <BootstrapColumn classes={ "col-sm-6" }>
		        	<h3>Languages</h3>
							{ Object.keys(this._content('languages')).map((key) => this.renderProgressBar('languages', key)) }
		        </BootstrapColumn>{/* .col-md-6 */}
					</BootstrapRow>

      		<BootstrapRow>
						<BootstrapColumn classes={ "col-sm-4" }>
		          <h3>Volunteer History</h3>
	            <p>
	              <strong>TEDxPerth</strong><br />
	              November 2014<br />
	              November 2013<br />
	            </p>
	            <p>
	              <strong>Startup Weekend</strong><br />
	              April 2015 <em>Mentor</em><br />
	              November 2014 <em>Organiser</em><br />
	              April 2014 <em>Mentor</em><br />
	              November 2013 <em>Mentor</em><br />
	              April 2013 <em>Mentor</em><br />
	            </p>
		        </BootstrapColumn>{/* .col-md-4 */}

						<BootstrapColumn classes={ "col-sm-8" }>
		          <h3>Certifications</h3>
	            <p>
	              <strong>Meros Language School</strong><br />
	              Completion of Japanese language course
	            </p>
	            <p>
	              <strong>Yuh Mei Chinese School</strong><br />
	              Completion of Chinese language course
	            </p>

		          <h3>Personal Qualities</h3>
		          <p>Hard working, goal-oriented, responsible, highly motivated and enthusiastic, as well as exerting an outgoing personality and confident in the approach of an unfamiliar problem.</p>
		        </BootstrapColumn>{/* .col-md-8 */}
		      </BootstrapRow>
		    </div>{/* .container */}
		  </section>
		)
	}
}

export default OtherInformation;