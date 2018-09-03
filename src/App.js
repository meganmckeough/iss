import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

	state = {
		people: [],
		lat: '',
		lon: '',
		country: '',
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
		//hardcoded for now!!! how can I fix?
		//trim to one decimal place before putting in params
		
		const countryUrl = "http://api.geonames.org/timezoneJSON"
		const params = {
			lat: this.state.lat,
			lng: this.state.lon,
			username: 'megan.mckeough'
		}

		axios.get(countryUrl, { params })
			.then(res => {
				this.setState({
					country: res.data.countryName 
				})
			})
	}

	getIssPosition = () => {
		const issUrl = "http://api.open-notify.org/iss-now.json"
		
		
		axios.get(issUrl)
			.then(res => {
				this.setState({
					lat: res.data.iss_position.longitude.toFixed(1),
					lon: res.data.iss_position.latitude.toFixed(1)
				})
			})

		getCountry()
	}

	getPassTime = () => {
		let sampleUrl = "http://api.open-notify.org/iss-pass.json?lat=37.8&lon=144.9"
	}

//separate into components later
  render() {
  	const { people, lat, lon, country } = this.state

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
        	<p>{ country }</p>
        </div>

        <form action="">
			<input type="text"/>
			<button onSubmit={ this.getPassTime }>search</button>
        </form>

      </div>
    );
  }
}

export default App;
