import React from 'react'

export default class Sidebar extends React.Component {

	render() {
		return (
			<div className={"sidebar " + this.props.className}>
				<nav><a onClick={ this.hideSidebar } href="#">>></a></nav>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis facere iure adipisci velit libero at enim nemo recusandae voluptate, possimus et! Eaque odit hic quam ipsa nam deserunt et similique.
				</p>
			</div>
		)
	}
	
}



			


