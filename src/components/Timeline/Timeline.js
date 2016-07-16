import React from 'react';

import TimelineContent from './TimelineContent';
import BootstrapRow from './../Helpers/BootstrapRow';
import BootstrapColumn from './../Helpers/BootstrapColumn';

class Timeline extends React.Component {
	
	/**
	 All data stored here
	 @param key { string } Key to return part of object
	*/
	_content(key) {
		var timeline = {
			timeline1: {
				type: 'work',
				company: 'Collectstor',
				role: 'Founder and Full Stack Developer',
				location: 'Tokyo, Japan and Perth, Australia',
				desc: [
            'Founded Collectstor – a website where collectors can showcase and share their collections.',
            'Coded the website which includes user registration, profile information, news feed and upload using a LAMP stack and jQuery.',
            'Honed entrepreneurial skills by marketing, distributing advertising at events and shops throughout Perth and the US.',
            'Created iOS app in Swift. Implemented a RESTful API to handle app interaction with the website.',
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
            'Developed several in-house CMS, an event management and booking CMS, which included an invitation, RSVP, and check in system for the Embassy’s biggest yearly event. Projects were done in a LAMP stack and jQuery.',
            'Managed requirements and projects for the Embassy and other Government agencies and stakeholders.',
            'Successfully internationalised, updated and made responsive all Embassy and stakeholders’ website, converted all static pages to dynamic using LAMP stack. Other duties included Linux server maintenance and official photographer.',
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
            'Successful integration of a web component using HTML, XSL and C# into their in-house CRM system which uses IBM UniVerse and Java.',
            'Gave a web developer’s perspective to the company’s CRM, which helped improve the fluency of the project timeline.',
          ],
        date: 'October 2006 - March 2007'
			},
			timeline6: {
				type: 'work',
				company: 'HomeTrader',
				role: 'Web Developer and Project Manager',
				location: 'Perth, Australia',
				desc: [
            'Managed and coded newsletters, web related content and new projects, as well as an intranet system for web projects in ASP.NET and MS SQL Server.',
          ],
        date: 'March 2006 - October 2006'
			},
			timeline7: {
				type: 'work',
				company: 'Itomic',
				role: 'Full Stack Web Developer',
				location: 'Perth, Australia',
				desc: [
            'Worked on the clients’ needs analysis, design, implementation and timely deployment of the project individually and i',
            'Project manager or team lead on several projects.',
            'Website projects done in PHP, MySQL and JavaScript. Maintained LAMP server. ',
            'Coded and implemented the first customisable online shopping cart in PHP.',
          ],
        date: 'January 2005 - February 2006'
			},
			timeline8: {
				type: 'work',
				company: 'Omegatrend International',
				role: 'HTML and Javascript Programmer (Contract Position)',
				location: 'Perth, Australia',
				desc: [
            'Coded HTML and JavaScript pages for their Global Expansion Program into Hong Kong, the Philippines, the USA, the UK, South Africa and Brunei.',
          ],
        date: 'December 2004'
			},
			timeline9: {
				type: 'work',
				company: 'Precise IT Solutions',
				role: 'Web Developer and Program Analyst',
				location: 'Perth, Australia',
				desc: [
            'Analyzed, designed, and implemented websites for clients in PHP and ASP, based on extensive research of customer needs and specifications. Also managed end-to-end server setup, deployment and support.',
            'Proposed and led effort creating a successful online shop, transitioning from IT only to a complete e-business solution.',
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
		var data = this._content(key);
		return <TimelineContent key={ key } data={ data } />;
	}

	render() {
		return (
			<section id="timeline">
		    <div className="container">
					<h2 className="text-center">Professional Experience</h2>
					
		      <BootstrapRow>
		        <BootstrapColumn classes={ 'col-md-12' }>
		          <div id="timeline-container">
								{ Object.keys(this._content()).map(key => this.renderTimeline(key)) }
		          </div>{/* .timeline-container */}
		        </BootstrapColumn>{/* .col-md-12 */}
		      </BootstrapRow>
		    </div>{/* .container */}
		  </section>
		)
	}
}

export default Timeline;