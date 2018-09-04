import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

	state = {
		people: [],
		myLat: '',
		myLon: '',
		latIss: '',
		lonIss: '',
		country: '',
		ocean: '',
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

	getPeopleInSpace = () => {
		const url = "http://api.open-notify.org/astros.json"

		axios.get(url)
			.then(res => {
				this.setState({
					people: res.data.people
				})
			})
	}

	getCountry = () => {
		const { latIss, lonIss } = this.state

		const countryUrl = "http://api.geonames.org/timezoneJSON"
		const oceanUrl = "http://api.geonames.org/oceanJSON"
		let params = {
			lat: latIss,
			lng: lonIss,
			username: 'megan.mckeough'
		}

		axios.get(countryUrl, { params })
			.then(res => {
				if (res.data.countryName) {
					this.setState({
						country: res.data.countryName 
					})					
				} 
			})

		axios.get(oceanUrl, { params })
			.then(res => {
				if (res.data.ocean) {
					this.setState({
						ocean: res.data.ocean.name
					})
				}
			})
	}

	getIssPosition = () => {
		const issUrl = "http://api.open-notify.org/iss-now.json"
		
		axios.get(issUrl)
			.then(res => {
				this.setState({
					latIss: res.data.iss_position.latitude,
					lonIss: res.data.iss_position.longitude
				})
				this.getCountry()
			})
	}

	handleGetPosition = () => {
		setInterval(this.getIssPosition, 5000)
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
				console.log(res)
				this.setState({
					passGeolocation: res.data.response[0].risetime
				})
				this.convertEpochTime(this.state.passGeolocation)
			})

	}

//separate into components later
  render() {
  	this.getGeolocation()
  	const { people, latIss, lonIss, country, ocean, passGeolocation, localTime } = this.state
	

    return (
   
      <div className="App">

        <h1>Where [over] the world is the ISS?</h1>

        <p>The International Space Station (ISS) orbits this great blue Earth at around 7.66km per second. It orbits the Earth once every 92 minutes.</p>
        <button onClick={ this.getPeopleInSpace }>Who's in space?</button>

        <div>
        	{ people.map(person => <p key={ person.name }>{ person.name }</p>) }
       		<div>There are <span> { people.length }</span> people on the ISS right now.</div>
        </div>

        <button onClick={ this.handleGetPosition }>See where it is now!</button>
        <div>
        	<p>Lat: { latIss }</p>
        	<p>Lon: { lonIss }</p>
        	<p>Currently over: { country ? country : ocean }</p>
        </div>

        <button onClick={ this.getPassTime }>When will it next pass me?</button>
        <div>
        	<p>The ISS will next pass over you on { localTime }</p>
        </div>

      </div>
    );
  }
}

export default App;
