import React from 'react';

class Introduction extends React.Component {
	render() {
		return (
			<div className="col-lg-3 intro-container">
	      <div className="intro">
	        <h1>Hello, I'm Robin</h1>
	        <h2>
	          Nice to meet you.<br />よろしくお願いします。<br />Senang bertemu denganmu.<br />幸会，幸会。
	        </h2>
	        <p>I'm a website generalist, who loves everything about websites. There is a beauty in the simplicity of design. I strive to make my websites simple, yet intuitive to all users.</p>
	        <p>Here's some ways to get to know me better,</p>
	        <ul>
	        	<li>My <a href="https://linkedin.com/in/robinjulius" target="_blank"><i className="fa fa-linkedin"></i> Linkedin profile</a>;</li>
	        	<li>Download my <a href="assets/files/RobinRESUME.pdf" target="_blank"><i className="fa fa-file-text-o"></i> CV;</a></li>
	        	<li>I also <a href="blog/"><i className="fa fa-rss"></i> blog</a> occasionally.</li>
	        </ul>
	        <p>I would love to hear from you. Say hi through <a href="#contact" className="smooth-link"><i className="fa fa-envelope-o"></i> the contact form</a>.</p>
	        
	        <div id="scroll-for-more-info">
	          <a href="#skills" className="btn btn-blue smooth-link"><i className="fa fa-chevron-down"></i> Would you like to know more?</a>
	        </div>{/* #scroll-for-more-info */}
	      </div>{/* .intro */}
	    </div>
		)
	}
}

export default Introduction;