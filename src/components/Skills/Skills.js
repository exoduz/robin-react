import React from 'react';

import BootstrapRow from './../Helpers/BootstrapRow';
import BootstrapColumn from './../Helpers/BootstrapColumn';
import ProgressBar from './../Helpers/ProgressBar';

class Skills extends React.Component {
	_content(obj, key) {
		var skills = {
			programming: {
				programming1: { name: 'HTML5', class_name: 'html', level: 99 },
				programming2: { name: 'CSS3', class_name: 'css', level: 99 },
				programming3: { name: 'PHP', class_name: 'php', level: 90 },
				programming4: { name: 'Javascript', class_name: 'js', level: 87 },
				programming5: { name: 'C#', class_name: 'csharp', level: 60 }
			},
			database: {
				database1: { name: 'MySQL', class_name: 'mysql', level: 85 },
				database2: { name: 'MS SQL Server', class_name: 'sqlserver', level: 60 }
			},
			frameworks: {
				framework1: { name: 'ReactJS', class_name: 'react-js', level: 80 },
				framework2: { name: 'CakePHP', class_name: 'cakephp', level: 95 },
				framework3: { name: 'WordPress', class_name: 'wordpress', level: 85 },
				framework4: { name: '.NET', class_name: 'dotnet', level: 60 }
			},
			webserver: {
				webserver1: { name: 'Apache', class_name: 'apache', level: 85 },
				webserver2: { name: 'Nginx', class_name: 'nginx', level: 85 },
				webserver3: { name: 'IIS', class_name: 'iis', level: 75 }
			}
		};
		
		return (obj && key ? skills[obj][key] : skills[obj]);
	}

	renderProgressBar(obj, key) {
		var data = this._content(obj, key);
		return <ProgressBar key={ key } type={ 'skills' } data={ data } />
	}

	render() {
		return (
			<section id="skills">
				<div className="container">
					<h2 className="text-center">Skills</h2>

		      <BootstrapRow>
		        <BootstrapColumn classes={ "col-sm-6" }>
		          <h3>Programming</h3>
		          { Object.keys(this._content('programming')).map((key) => this.renderProgressBar('programming', key)) }
		        </BootstrapColumn>{/* .col-sm-6 */}

		        <BootstrapColumn classes={ "col-sm-6" }>
		          <h3>Frameworks</h3>
	            { Object.keys(this._content('frameworks')).map((key) => this.renderProgressBar('frameworks', key)) }
	            <h4>... and others</h4>
						</BootstrapColumn>{/* .col-sm-6 */}
					</BootstrapRow>
					<BootstrapRow>
		        <BootstrapColumn classes={ "col-sm-6" }>
		          <h3>Database</h3>
		          { Object.keys(this._content('database')).map((key) => this.renderProgressBar('database', key)) }
		        </BootstrapColumn>{/* .col-sm-6 */}

		        <BootstrapColumn classes={ "col-sm-6" }>
		          <h3>Web Server</h3>
		          { Object.keys(this._content('webserver')).map((key) => this.renderProgressBar('webserver', key)) }
						</BootstrapColumn>{/* .col-sm-6 */}
		      </BootstrapRow>

		      <BootstrapRow>
		        <BootstrapColumn classes={ "col-md-12" }>
		          <h5>* I would never say I know something 100%, because there's always something new to learn.</h5>
		        </BootstrapColumn>{/* .col-md-12 */}
		      </BootstrapRow>
		    </div>{/* .container */}
			</section>
		)
	}
}

export default Skills;