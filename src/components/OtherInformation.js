import React from 'react';

import ColumnMD4 from './ColumnMD4';
import ProgressBarLanguages from './ProgressBarLanguages';

class OtherInformation extends React.Component {
	render() {
		var languages = {
			lang1: { name: 'English', proficiency: 'Native', level: 99 },
			lang2: { name: 'Indonesian', proficiency: 'Native', level: 99 },
			lang3: { name: 'Japanese', proficiency: 'Business', level: 85 },
			lang4: { name: 'Mandarin', proficiency: 'Conversational', level: 70 },
			lang5: { name: 'Cantonese', proficiency: 'Conversational', level: 50 }
		}

		return (
		  <section id="other-info">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h2 className="text-center">Other Information</h2>
		        </div>

		        <ColumnMD4>
		        	<h3>Languages</h3>
							{
								Object.keys(languages).map(function(index) {
  								return <ProgressBarLanguages key={ index } data={ languages[index] } />
								})
							}
		        </ColumnMD4>

		        <ColumnMD4>
		          <h3>Volunteer History</h3>
		          <ul>
		            <li>
		              <strong>TEDxPerth</strong><br />
		              November 2014<br />
		              November 2013<br />
		            </li>
		            <li>
		              <strong>Startup Weekend</strong><br />
		              April 2015 <em>Mentor</em><br />
		              November 2014 <em>Organiser</em><br />
		              April 2014 <em>Mentor</em><br />
		              November 2013 <em>Mentor</em><br />
		              April 2013 <em>Mentor</em><br />
		            </li>
		          </ul>
		        </ColumnMD4>

		        <ColumnMD4>
		          <h3>Certificiations</h3>
		          <ul>
		            <li>
		              <strong>Meros Language School</strong><br />
		              Completion of Japanese language course
		            </li>
		            <li>
		              <strong>Yuh Mei Chinese School</strong><br />
		              Completion of Chinese language course
		            </li>
		          </ul>

		          <h3>Personal Qualities</h3>
		          <p>Hard working, goal-oriented, responsible, highly motivated and enthusiastic, as well as exerting an outgoing personality and confident in the approach of an unfamiliar problem.</p>
		        </ColumnMD4>

		      </div>{/* .row */}
		    </div>{/* .container */}
		  </section>
		)
	}
}

export default OtherInformation;