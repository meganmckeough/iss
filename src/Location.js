import React from 'react'
import axios from 'axios'

export default class Location extends React.Component {
	
	state = {
		latIss: '',
		lonIss: '',
		country: '',
		ocean: ''
	}

	componentWillMount = () => {
		this.handleGetPosition()
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

	render() {
		const { latIss, lonIss, country, ocean } = this.state

		return (
			<div>
				<h2>The ISS is currently at:</h2>
        		<div>
		        	<p>Latitude: { latIss }</p>
		        	<p>Longitude: { lonIss }</p>
		        	<p>Currently over: { country ? country : ocean }</p>
        		</div>
			</div>
		)
	}
}