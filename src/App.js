import React, { Component } from 'react'
import './App.css'
import './Background.css'
import './People.css'
import './Location.css'
import './NextPass.css'
import './Star.css'
import './Distance.css'
import './Sidebar.css'
import axios from 'axios'

import People from './People'
import Location from './Location'
import NextPass from './NextPass'
import Distance from './Distance'
import Sidebar from './Sidebar'

class App extends Component {

	state = {}
		
	render() {
	    return (
	   
	      	<div className="App">

	      		<Sidebar />
			
				<div className="stars"></div>
				<div className="twinkling"></div>
				<div className="p p-1"></div>
				<div className="p p-2"></div>


				<nav>About</nav>
		        <h1>Where [over] the world is the ISS?</h1>
		        <p className="description">The International Space Station (ISS) orbits the Earth at the rate of 7.66km per second, around once every 92 minutes.</p>
		        <Distance />

				<Location />
				<NextPass />
		        <People />
		        <img id="earth" src="../earth2.gif" alt=""/>

				<footer>
					<a href="https://www.linkedin.com/in/megan-mckeough/" target="_blank">Megan McKeough 2018</a>
				</footer>
			
	      	</div>
	    )
	}
}

export default App;
