import React from 'react'
import axios from 'axios'

export default class People extends React.Component {
	
	state = {
		people: []
	}

	componentWillMount = () => {
		this.getPeopleInSpace()
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
			<div className="people">
				<h2>Who's in space?</h2>
				<div>
	       			There are currently <span> { people.length }</span> people on the ISS right now.
	       		</div>

		        <div>
		        	{ people.map(person => 
		        		<p key={ person.name }>{ person.name }</p>
		        	) }
		        </div>
		    </div>
		)
	}
}
 