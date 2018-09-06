import React from 'react'
import axios from 'axios'

export default class Location extends React.Component {

	state = {
		myLat: '',
		myLon: '',
		passGeolocation: '',
		localTime: '',
		currentTime: ''
	}

	componentWillMount = () => {
		this.getGeolocation()
		setInterval(this.showTime, 1000)
	}

	getGeolocation = () => {
		navigator.geolocation.getCurrentPosition(location => {
			this.setState({
				myLat: location.coords.latitude,
				myLon: location.coords.longitude
			})
			this.getPassTime(location.coords)
		})
	}

	showTime = () => {
		let now = new Date()
		this.setState({
			currentTime: now.toLocaleTimeString()
		})
	}

	convertEpochTime = epoch => {
		this.setState({
			localTime: new Date(epoch * 1000).toString()
		})
	}

	getPassTime = (coords) => {
		let { latitude, longitude } = coords
		
		// const passUrl = "http://localhost:8080/iss-pass"
		const passUrl = "https://vast-harbor-27818.herokuapp.com/iss-pass"

		let params = {	
			lat: latitude,
			lon: longitude,
			n: 1
		}

		axios.get(passUrl, { params })
			.then(res => {
				if (res.data.response[0]) {
					this.setState({
						passGeolocation: res.data.response[0].risetime
					})
					this.convertEpochTime(this.state.passGeolocation)
				}
			})
	}

	render() {
		const { passGeolocation, localTime, currentTime } = this.state

		return (
			passGeolocation ?
				<div className="next-pass">
					<h2>When will it next pass me?</h2>
			        <div>
			        	<p>Current time: { currentTime }</p>
			        	<p>{ localTime ? `The ISS will pass over your location on ${ localTime }` : "The ISS is near your location right now!!" }</p>
			        </div>
		        </div>
			: 
				<div className="next-pass loading"><img id="loader" src="../loader.gif" alt=""/>loading... </div> 
		)
	}
}