import React from 'react';

import ColumnMD4 from './ColumnMD4';
import ProgressBar from './ProgressBar';

class Skills extends React.Component {
	render() {
		return (
			<section id="skills">
				<div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h2 className="text-center">Skills</h2>
		        </div>

		        <ColumnMD4>
		          <h3>Programming</h3>
		          <div className="progress">
		              <div className="progress-bar html" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
		                HTML5
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar css" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
		                CSS3
		              </div>
		            </div>
		          <div className="progress">
		              <div className="progress-bar php" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
		                PHP
		              </div>
		            </div>
		            <div className="progress">
		              <div className="progress-bar js" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
		                Javascript
		              </div>
		            </div>
		            <div className="progress">
		              <div className="progress-bar csharp" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
		                C#
		              </div>
		            </div>

		            <h3>Database</h3>
		          <div className="progress">
		              <div className="progress-bar mysql" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
		                MySQL
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar sqlserver" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
		                MS SQL Server
		              </div>
		          </div>
		        </ColumnMD4>{/* .col-md-4 */}

		        <ColumnMD4>
		          <h3>Frameworks</h3>
		            <div className="progress">
		              <div className="progress-bar cakephp" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
		                CakePHP
		              </div>
		            </div>
		            <div className="progress">
		              <div className="progress-bar wordpress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
		                Wordpress
		              </div>
		            </div>
		            <div className="progress">
		              <div className="progress-bar react-js" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
		                React.js
		              </div>
		            </div>
		            <div className="progress">
		              <div className="progress-bar dotnet" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
		                .NET
		              </div>
		            </div>
		            <h4>... and others</h4>

		          <h3>Web Server</h3>
		          <div className="progress">
		              <div className="progress-bar apache" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
		                Apache
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar nginx" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
		                Nginx
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar iis" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
		                IIS
		              </div>
		          </div>
		        </ColumnMD4>

		        <ColumnMD4>
		          <h3>Operating Systems</h3>
		          <div className="progress">
		              <div className="progress-bar osx" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
		                OSX
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar windows" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
		                Windows
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar linux" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
		                Linux
		              </div>
		          </div>

		          <h3>Software</h3>
		          <div className="progress">
		              <div className="progress-bar office" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
		                Microsoft Office
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar sublime" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
		                Sublime
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar adobe" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
		                Adobe Suite
		              </div>
		          </div>
		          <div className="progress">
		              <div className="progress-bar adobe" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
		                Visual Studio Suite
		              </div>
		          </div>
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