import React from 'react';

import Introduction from './Introduction';
import Showcase from './Showcase';

class Hero extends React.Component {
	getData(key) {
		var showcase = {
			showcase1: {
				class_name: 'col-md-12 showcase-1 border-b',
				desc: 'Collectstor is a platform for collectors of all things to socialize, explore, and showcase their own collections.',
				logo: {
					image_url: 'assets/img/co-logo-inline-white.png',
					alt: 'Collectstor Logo',
					id: 'collectstor-logo-mb'
				},
				image: {
					image_url: 'assets/img/Collectstor-Website-MacBook-Silver.png',
					alt: 'Collectstor on the Macbook',
					id: 'collectstor-mb'
				},
				link: {
					link1: {
						link_url: 'https://collectstor.com',
						text: 'Visit the website and start showcasing <i class="fa fa-external-link"></i>',
						class_name: 'hidden-on-mobile'
					},
					link2: {
						link_url: 'https://collectstor.com',
						text: 'Visit website <i class="fa fa-external-link"></i>',
						class_name: 'show-on-mobile'
					}
				}
			},
			showcase2: {
				class_name: 'col-md-6 showcase-2 border-r',
				desc: `
           The iPhone app is also available.<br />
           Now you can showcase and share collections on the go.
				`,
				logo: {
					image_url: 'assets/img/co-logo-inline-white.png',
					alt: 'Collectstor Logo',
					id: 'collectstor-logo-ios'
				},
				image: {
					image_url: 'assets/img/Collectstor-App-iPhone6S-Rose.png',
					alt: 'Collectstor on iOS',
					id: 'collectstor-iphone'
				},
				link: {
					link1: {
						link_url: 'https://itunes.apple.com/us/app/collectstor-showcasing-collections/id1044554718',
						text: 'Download on the <i class="fa fa-apple"></i> App Store',
						class_name: ''
					}
				}
			},
			showcase3: {
				class_name: 'col-md-6 showcase-3',
				desc: 'A simple counter to track the time you last quit smoking. It shows information such as the duration, money saved and cigarettes not smoked.',
				logo: {
					image_url: 'assets/img/last-cigarette-app-icon-2.png',
					alt: 'Last Cigarette Logo',
					id: 'last-cigarette-logo-ios'
				},
				image: {
					image_url: 'assets/img/LastCigarette-App-iPhone6S-Gold.png',
					alt: 'Last Cigarette on iOS',
					id: 'lastcigarette-iphone'
				},
				link: {
					link1: {
						link_url: 'https://itunes.apple.com/us/app/last-cigarette/id1088134074',
						text: 'Download on the <i class="fa fa-apple"></i> App Store',
						class_name: ''
					},
					link2: {
						link_url: 'https://github.com/exoduz/last-cigarette',
						text: 'Download source on <i class="fa fa-github"></i> Github',
						class_name: ''
					}
				}
			}
		}

		return key ? showcase[key] : showcase;
	}

	render() {
		return (
		  <section id="hero">
		    <Introduction />

		    <div className="col-lg-9 tile">
		      <div className="row">
		        <Showcase data={ this.getData('showcase1') } />
		      </div>{/* .row */}

		      <div className="row">
		      	<Showcase data={ this.getData('showcase2') } />
		      	<Showcase data={ this.getData('showcase3') } />
		      </div>{/* .col-md-6 .showcase .showcase-2 border-r */}
		    </div>{/* .col-lg-9 tile */}
		  </section>
		)
	}
}

export default Hero;