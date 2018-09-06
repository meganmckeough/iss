import React from 'react'
import axios from 'axios'

export default class Location extends React.Component {
	
	state = {
		latIss: '',
		lonIss: '',
		country: '',
		countryCode: '',
		ocean: ''
	}

	componentWillMount = () => {
		this.handleGetPosition()
	}

	getCountry = () => {
		const { latIss, lonIss } = this.state

		const countryUrl = "https://api.geonames.org/timezoneJSON"
		const oceanUrl = "https://api.geonames.org/oceanJSON"
		let params = {
			lat: latIss,
			lng: lonIss,
			username: 'megan.mckeough'
		}

		axios.get(countryUrl, { params })
			.then(res => {
				if (res.data.countryName) {
					this.setState({
						country: res.data.countryName,
						countryCode: res.data.countryCode 
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
		const issUrl = "https://api.open-notify.org/iss-now.json"
		
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
		const { latIss, lonIss, country, countryCode, ocean } = this.state

		return (

			latIss && country || ocean ?

				<div className="location">
					<h2>Where is it right now?</h2>
	        		<div>
			        	<p>Latitude: { latIss }</p>
			        	<p>Longitude: { lonIss }</p>
			        	
			        	<p>Currently over: { country ? country : ocean }</p>

			        	{ country ? <img src={`https://www.countryflags.io/${ countryCode }/flat/64.png`} alt=""/> : ocean ? <img className="un" src="UN.png" alt=""/> : <img src="" alt=""/>}

			        	{ country || ocean ? <p><a href={ `https://www.google.com/maps/?q=${latIss},${lonIss}` } target="_blank">(...Where exactly?)</a></p> : <div></div>}
	        		</div>
				</div>
			: 
				<div className="location loading"><img id="loader" src="loader.gif" alt=""/>loading... </div> 
		)
	}
}