import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import People from './People'
import Location from './Location'

class App extends Component {

	state = {
		myLat: '',
		myLon: '',
		passGeolocation: '',
		localTime: ''
	}

	getGeolocation = () => {

		navigator.geolocation.getCurrentPosition(location => {
			this.setState({
				myLat: location.coords.latitude,
				myLon: location.coords.longitude
			})
		})
	}

	convertEpochTime = epoch => {
		this.setState({
			localTime: new Date(epoch * 1000).toString()
		})
	}

	getPassTime = e => {
		e.preventDefault()
		let { myLat, myLon } = this.state

		const passUrl = "http://localhost:8080/iss-pass"
		let params = {	
			lat: myLat,
			lon: myLon,
			n: 1
		}

		axios.get(passUrl, { params })
			.then(res => {
				this.setState({
					passGeolocation: res.data.response[0].risetime
				})
				this.convertEpochTime(this.state.passGeolocation)
			})

	}

  render() {
  	this.getGeolocation()
  	const { passGeolocation, localTime } = this.state
	
    return (
   
      <div className="App">

        <h1>Where [over] the world is the ISS?</h1>

        <p>The International Space Station (ISS) orbits this great blue planet at the rate of around 7.66km per second. The ISS orbits the Earth once every 92 minutes.</p>

        <People />
		<Location />

        <button onClick={ this.getPassTime }>When will it next pass me?</button>
        <div>
        	<p>The ISS will next pass over you on { localTime }</p>
        </div>

      </div>
    );
  }
}

export default App;
