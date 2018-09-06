import React from 'react'

export default class Sidebar extends React.Component {

	render() {
		return (
			<div className={"sidebar " + this.props.className}>
				<nav><a onClick={ this.props.hidebar } href="#">>></a></nav>
				<p className="about">This site was built by <a href="https://www.linkedin.com/in/megan-mckeough/">me</a>, with React.js, <a href="http://open-notify.org/">Open Notify</a>, <a href="http://www.geonames.org/">GeoNames</a>, and <a href="https://countryflags.io/">CountryFlags.io</a> APIs, and a love of space. Visit the <a href="https://github.com/meganmckeough/iss">Github</a> for more.</p>
			</div>
		)
	}
	
}



			


