import React from 'react';

import TimelineContent from './TimelineContent';

class Timeline extends React.Component {
	getData(key) {
		var timeline = {
			timeline1: {
				type: 'work',
				company: 'Collectstor',
				role: 'Founder and Full Stack Developer',
				location: 'Tokyo, Japan and Perth, Australia',
				desc: [
            'Founded Collectstor - a website where collectors can showcase and share their collections.',
            'Coded the main website which includes user registration, profile information; news feed and upload feature using a LAMP stack using CakePHP as a framework.',
            'Honed entrepreneurial skills by marketing the idea at events and to shops throughout Perth and the US. This included distributing advertising material such as pamphlets to various shops in Perth and the US.',
            'Created iOS App in Swift, which handles user registration, login and an image upload feature. Implemented a web-based RESTful API to handle app interaction with the website.',
        ],
        date: 'May 2013 - Present'
			},
			timeline2: {
				type: 'location',
				desc: 'Moved to Perth, Australia',
				date: 'October 2012'
			},
			timeline3: {
				type: 'work',
				company: 'Australian Embassy, Tokyo',
				role: 'Electronic Media Administrator',
				location: 'Tokyo, Japan and Perth, Australia',
				desc: [
            'Developed several in-house CMS. The first is an event management and booking CMS, the second is an invitation, RSVP, and check in system for the Embassy’s biggest yearly event. Both of these were created using a LAMP stack and CakePHP.',
            'Managed requirements and projects for the Embassy and other Government agencies within the Embassy.',
            'Successfully internationalised and updated all Embassy and attached agencies’ websites to W3C and HTML5 compliant, also converting all pages from static to dynamic (LAMP stack) and fully responsive.Other duties included Linux server maintenance and official photographer.',
          ],
        date: 'July 2008 - April 2013'
			},
			timeline4: {
				type: 'location',
				desc: 'Moved to Tokyo, Japan',
				date: 'April 2007'
			},
			timeline5: {
				type: 'work',
				company: 'IT Vision',
				role: 'Web and Software Developer',
				location: 'Perth, Australia',
				desc: [
            'Successful integration of the RRIF web component using HTML, XSL and C# into their in-house CRM system. Their CRM system uses IBM UniVerse and Java.',
            'Gave a web developer’s perspective to the RRIF (the company’s CRM) project, which helped improve the fluency of the project timeline.',
          ],
        date: 'October 2006 - March 2007'
			},
			timeline6: {
				type: 'work',
				company: 'HomeTrader',
				role: 'Web Developer and Project Manager',
				location: 'Perth, Australia',
				desc: [
            'Managed and coded web related content and new development projects, as well as an intranet system for web development projects in ASP.NET and MS SQL Server.',
            'Created newsletter campaigns for marketing purposes.',
          ],
        date: 'March 2006 - October 2006'
			},
			timeline7: {
				type: 'work',
				company: 'Itomic',
				role: 'Full Stack Web Developer',
				location: 'Perth, Australia',
				desc: [
            'Worked on the website lifecycle which includes the clients’ needs analysis, design, implementation and timely deployment of the project. This included being the project manager or team lead on several projects.',
            'Occasionally maintained LAMP server.',
            'Worked individually or in teams to successfully complete website projects done in PHP, MySQL and Javascript within specified deadlines.',
            'Coded and implemented the first customisable online shopping cart in PHP for the company.',
          ],
        date: 'January 2005 - February 2006'
			},
			timeline8: {
				type: 'work',
				company: 'Omegatrend International',
				role: 'HTML and Javascript Programmer (Contract Position)',
				location: 'Perth, Australia',
				desc: [
            'Managed and coded web related content and new development projects, as well as an intranet system for web development projects in ASP.NET and MS SQL Server.',
            'Created newsletter campaigns for marketing purposes.',
          ],
        date: 'December 2004'
			},
			timeline9: {
				type: 'work',
				company: 'Precise IT Solutions',
				role: 'Web Developer and Program Analyst',
				location: 'Perth, Australia',
				desc: [
            'Analyzed, designed, and implemented websites for clients in PHP and ASP, based on extensive research of customer needs and specifications. Managed end-to-end server setup, deployment and support for these sites.',
            'Proposed and led an effort to create a successful online shop, effectively transitioning the company from IT solutions-only to a complete e-business firm.',
          ],
        date: 'January 2002 - January 2005'
			},
			timeline10: {
				type: 'work',
				company: 'Speedworks Motorsports',
				role: 'Database Administrator, Sales Rep and Pit Crew',
				location: 'Perth, Australia',
				desc: [
						'Successfully created, implemented and maintained a stock and products database.',
          ],
        date: 'January 1999 - January 2002'
			}
		};

		return key ? timeline[key] : timeline;
	}

	renderTimeline(key) {
		var data = this.getData(key);
		return <TimelineContent key={ key } data={ data } />;
	}

	render() {
		return (
			<section id="timeline">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <h2 className="text-center">Professional Experience</h2>

		          <div id="timeline-container">
								{ Object.keys(this.getData()).map(key => this.renderTimeline(key)) }
		          </div>{/* .timeline-container */}
		        </div>{/* .col-md-12 */}
		      </div>{/* .row */}
		    </div>{/* .container */}
		  </section>
		)
	}
}

export default Timeline;