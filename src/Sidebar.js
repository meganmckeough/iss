import React from 'react'

export default class Sidebar extends React.Component {

	render() {
		return (
			<div className={"sidebar " + this.props.className}>
				<nav><a onClick={ this.props.hidebar } href="#">Hide</a></nav>
				<p className="about">This site was built by <a href="https://www.linkedin.com/in/megan-mckeough/" target="_blank">me</a>, Megan McKeough, with React.js, <a href="http://open-notify.org/" target="_blank">Open Notify</a>, <a href="http://www.geonames.org/" target="_blank">GeoNames</a>, and <a href="https://countryflags.io/" target="_blank">CountryFlags.io</a> APIs, and a love of space (the final frontier).</p>

				<p>Visit the <a href="https://github.com/meganmckeough/iss" target="_blank">Github</a> for more.</p>

				<p>Big thanks to <a href="https://generalassemb.ly/education/web-development-immersive" target="_blank">General Assembly</a>; and long live WDI16.</p> 

				<p>2018</p>
				<img className="cute" src="../cute.gif_c200" alt=""/>
			</div>
		)
	}
	
}



			


