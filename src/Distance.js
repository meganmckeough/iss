import React from 'react'

export default class Location extends React.Component {

	render() {

		return (
			<div className="container">
				<div className="satellite-move">
				<img id="satellite" class="satellite-rotate" src="../satellite2.png" alt=""/>
				</div>
				<img id="earth" src="../worldwide.png" alt=""/>
			</div>
		)

	}
}



