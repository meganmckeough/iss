import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

	state = {
		people: [],
		lat: '',
		lon: '',
		country: '',
		ocean: '',
		searchTerm: ''
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
		const { lat, lon } = this.state

		const countryUrl = "http://api.geonames.org/timezoneJSON"
		const oceanUrl = "http://api.geonames.org/oceanJSON"
		let params = {
			lat: lat,
			lng: lon,
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
				if (res.data.ocean.name) {
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
					lat: res.data.iss_position.latitude,
					lon: res.data.iss_position.longitude
				})
				this.getCountry()
			})
	}

	getPassTime = e => {
		e.preventDefault()
		const passUrl = "http://api.open-notify.org/iss-pass.json"
		let params = {
			lat: 37.8,
			lon: 144.9
		}

		axios.get(passUrl, { params })
			.then(res => {
				
			})

	}

//separate into components later
  render() {
  	const { people, lat, lon, country, ocean } = this.state

    return (
   
      <div className="App">

        <h1>ISS</h1>
        <button onClick={ this.getPeopleInSpace }>Who's in space?</button>

        <div>
        	{ people.map(person => <p key={ person.name }>{ person.name }</p>) }
       		<div>There are <span> { people.length }</span> people in space right now.</div>
        </div>

        <button onClick={ this.getIssPosition }>Where is the ISS?</button>
        <div>
        	<p>Lat: { lat }</p>
        	<p>Lon: { lon }</p>
        	<p>Currently over: { country ? country : ocean }</p>
        </div>

        <form action="" onSubmit={ this.getPassTime }>
			<input type="text"/>
			<button>search</button>
        </form>

      </div>
    );
  }
}

export default App;
