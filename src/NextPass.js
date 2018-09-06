import React from 'react'
import axios from 'axios'

export default class Location extends React.Component {

	state = {
		myLat: '',
		myLon: '',
		passGeolocation: '',
		localTime: ''
	}

	componentWillMount = () => {
		this.getGeolocation()
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

	convertEpochTime = epoch => {
		this.setState({
			localTime: new Date(epoch * 1000).toString()
		})
	}

	getPassTime = (coords) => {
		let { latitude, longitude } = coords

		const passUrl = "http://localhost:8080/iss-pass"
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
		const { passGeolocation, localTime } = this.state

		return (
			passGeolocation && localTime ?
				<div className="next-pass">
					<h2>When will it next pass me?</h2>
			        <div>
			        	<p>{ localTime ? `The ISS will pass over your location on ${ localTime }` : "The ISS is near your location right now!!" }</p>
			        </div>
		        </div>
			: 
				<div className="next-pass loading"><img id="loader" src="../loader.gif" alt=""/>loading... </div> 
		)
		
	}

		

}