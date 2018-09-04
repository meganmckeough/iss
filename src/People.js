import React from 'react'
import axios from 'axios'

export default class People extends React.Component {
	
	state = {
		people: []
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

	render() {
		const { people } = this.state

		return (
			<div>
				<button onClick={ this.getPeopleInSpace }>
					Who's in space?
				</button>

		        <div>
		        	{ people.map(person => 
		        		<p key={ person.name }>{ person.name }</p>
		        	) }
		        </div>

	       		<div>
	       			There are <span> { people.length }</span> people on the ISS right now.
	       		</div>
		    </div>
		)
	}
}
 