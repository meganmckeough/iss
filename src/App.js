import React, { Component } from 'react'
import './App.css'
import './Background.css'
import './People.css'
import './Location.css'
import './NextPass.css'
import './Star.css'
import axios from 'axios'

import People from './People'
import Location from './Location'
import NextPass from './NextPass'

class App extends Component {

	state = {}

  	render() {
	    return (
	   
	      <div className="App">
			
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="p p-1"></div>
			<div className="p p-2"></div>
	
	        <h1>Where [over] the world is the ISS?</h1>
	        <p>The International Space Station (ISS) orbits the Earth at the rate of 7.66km per second, around once every 92 minutes.</p>
	        <img id="earth" src="../earth2.gif" alt=""/>

			<Location />
			<NextPass />
	        <People />

			<footer>Megan McKeough 2018</footer>
			
	      </div>
	    )
  	}
}

export default App;
