import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import People from './People'
import Location from './Location'
import NextPass from './NextPass'

class App extends Component {

	state = {}

  	render() {
	    return (
	   
	      <div className="App">

	        <h1>Where [over] the world is the ISS?</h1>

	        <p>The International Space Station (ISS) orbits this great blue planet at the rate of around 7.66km per second, around once every 92 minutes.</p>

	        <People />
			<Location />
			<NextPass />

	      </div>
	    )
  	}
}

export default App;
