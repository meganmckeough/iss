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
		const url = "https://vast-harbor-27818.herokuapp.com/iss-astros"

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
			
			people ? 
				<div className="people">
					<h2>Who's in space?</h2>
					<div>
						{ people.map(person => 
							<img className="astro" src="astronaut.png" alt=""/>
						) }
		       			
		       			<p>There are currently <span> { people.length }</span> people on the ISS right now.</p>
		       		</div>

			        <div>
			        	{ people.map(person => 
			        		<p key={ person.name }>{ person.name }</p>
			        	) }
			        </div>
			    </div>
			:
				<div className="people loading"><img id="loader" src="loader.gif" alt=""/>loading... </div>
		)
	}
}
 