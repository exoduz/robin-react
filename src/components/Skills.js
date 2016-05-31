import React from 'react';

import ColumnMD4 from './ColumnMD4';
import ProgressBarSkills from './ProgressBarSkills';

class Skills extends React.Component {
	render() {
		var skills = {
			programming: {
				programming1: { name: 'HTML5', class_name: 'html', level: 99 },
				programming2: { name: 'CSS3', class_name: 'css', level: 99 },
				programming3: { name: 'PHP', class_name: 'php', level: 90 },
				programming4: { name: 'Javascript', class_name: 'js', level: 85 },
				programming5: { name: 'C#', class_name: 'csharp', level: 60 }
			},
			database: {
				database1: { name: 'MySQL', class_name: 'mysql', level: 85 },
				database2: { name: 'MS SQL Server', class_name: 'sqlserver', level: 60 }
			},
			frameworks: {
				framework1: { name: 'CakePHP', class_name: 'cakephp', level: 90 },
				framework2: { name: 'WordPress', class_name: 'wordpress', level: 85 },
				framework3: { name: 'React.js', class_name: 'react-js', level: 75 },
				framework4: { name: '.NET', class_name: 'dotnet', level: 60 }
			},
			webserver: {
				webserver1: { name: 'Apache', class_name: 'apache', level: 85 },
				webserver2: { name: 'Nginx', class_name: 'nginx', level: 85 },
				webserver3: { name: 'IIS', class_name: 'iis', level: 75 }
			},
			os: {
				os1: { name: 'OSX', class_name: 'osx', level: 95 },
				os2: { name: 'Windows', class_name: 'windows', level: 90 },
				os3: { name: 'Linux', class_name: 'linux', level: 75 }
			},
			software: {
				software1: { name: 'Microsoft Office', class_name: 'office', level: 99 },
				software2: { name: 'Sublime', class_name: 'sublime', level: 90 },
				software3: { name: 'Adobe Suite', class_name: 'adobe', level: 70 },
				software4: { name: 'Visual Studio Suite', class_name: 'visualstudio', level: 70 },
			}
		};

		return (
			<section id="skills">
				<div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h2 className="text-center">Skills</h2>
		        </div>

		        <ColumnMD4>
		          <h3>Programming</h3>
		          {
								Object.keys(skills.programming).map(function(index) {
  								return <ProgressBarSkills key={ index } data={ skills.programming[index] } />
								})
							}

							<h3>Database</h3>
		          {
								Object.keys(skills.database).map(function(index) {
  								return <ProgressBarSkills key={ index } data={ skills.database[index] } />
								})
							}
		        </ColumnMD4>{/* .col-md-4 */}

		        <ColumnMD4>
		          <h3>Frameworks</h3>
	            {
								Object.keys(skills.frameworks).map(function(index) {
  								return <ProgressBarSkills key={ index } data={ skills.frameworks[index] } />
								})
							}
	            <h4>... and others</h4>

		          <h3>Web Server</h3>
		          {
								Object.keys(skills.webserver).map(function(index) {
  								return <ProgressBarSkills key={ index } data={ skills.webserver[index] } />
								})
							}
		        </ColumnMD4>

		        <ColumnMD4>
		          <h3>Operating Systems</h3>
		          {
								Object.keys(skills.os).map(function(index) {
  								return <ProgressBarSkills key={ index } data={ skills.os[index] } />
								})
							}

		          <h3>Software</h3>
		          {
								Object.keys(skills.software).map(function(index) {
  								return <ProgressBarSkills key={ index } data={ skills.software[index] } />
								})
							}
		        </ColumnMD4>
		      </div>{/* .row */}

		      <div className="row">
		        <div className="col-md-12">
		          <h5>* I would never say I know something 100%, because there's always something new to learn.</h5>
		        </div>
		      </div>{/* .row */}
		    </div>{/* .container */}
			</section>
		)
	}
}

export default Skills;