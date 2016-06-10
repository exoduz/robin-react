import React from 'react';

import Introduction from './Introduction';
import Showcase from './Showcase';

class Hero extends React.Component {
	
	/**
	 All data stored here
	 @param key { string } Key to return part of object
	*/
	_getData(key) {
		var showcase = {
			showcase1: {
				class_name: 'col-md-12 showcase-1 border-b',
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
						text: 'Visit the website and start showcasing',
						icon: 'fa fa-external-link',
						class_name: 'hidden-on-mobile'
					},
					link2: {
						link_url: 'https://collectstor.com',
						text: 'Visit website',
						icon: 'fa fa-external-link',
						class_name: 'show-on-mobile'
					}
				}
			},
			showcase2: {
				class_name: 'col-md-6 showcase-2 border-r',
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
						text: 'Download on the App Store',
						icon: 'fa fa-apple',
						class_name: ''
					}
				}
			},
			showcase3: {
				class_name: 'col-md-6 showcase-3',
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
						text: 'Download on the App Store',
						icon: 'fa fa-apple',
						class_name: ''
					},
					link2: {
						link_url: 'https://github.com/exoduz/last-cigarette',
						text: 'Download source on Github',
						icon: 'fa fa-github',
						class_name: ''
					}
				}
			}
		}

		return key ? showcase[key] : showcase;
	}

	render() {
		var showcase1 = this._getData('showcase1'),
			showcase2 = this._getData('showcase2'),
			showcase3 = this._getData('showcase3');

		return (
		  <section id="hero">
		    <Introduction />

		    <div className="col-lg-9 tile">
		      <div className="row">
		        <Showcase data={ showcase1 } >
		        	Collectstor is a platform for collectors of all things to socialize, explore, and showcase their own collections.
		        </Showcase>
		      </div>{/* .row */}

		      <div className="row">
		      	<Showcase data={ showcase2 } >
		        	The iPhone app is also available.<br />
		        	Now you can showcase and share collections on the go.
		        </Showcase>
		      	<Showcase data={ showcase3 } >
		        	A simple counter to track the time you last quit smoking. It shows information such as the duration, money saved and cigarettes not smoked.
		        </Showcase>
		      </div>{/* .col-md-6 .showcase .showcase-2 border-r */}
		    </div>{/* .col-lg-9 tile */}
		  </section>
		)
	}
}

export default Hero;