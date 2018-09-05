import React, { Component } from 'react'
import './App.css'
import './Background.css'
import './People.css'
import axios from 'axios'

import People from './People'
import Location from './Location'
import NextPass from './NextPass'
import Footer from './Footer'

class App extends Component {

	state = {}

  	render() {
	    return (
	   
	      <div className="App">
			
			<div className="stars"></div>
			<div className="twinkling"></div>
	
	        <h1>Where [over] the world is the ISS?</h1>
	        <p>The International Space Station (ISS) orbits this great blue planet at the rate of 7.66km per second, around once every 92 minutes.</p>

	        <People />
			<Location />
			<NextPass />

			<Footer />
			
	      </div>
	    )
  	}
}

export default App;
