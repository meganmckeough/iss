import React from 'react'

export const hideSidebar = (props) => {
	return (
		<div className="sidebar">
			<nav><a onClick={ this.hideSidebar } href="#">>></a></nav>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis facere iure adipisci velit libero at enim nemo recusandae voluptate, possimus et! Eaque odit hic quam ipsa nam deserunt et similique.
			</p>
		</div>
	)
}

export const Sidebar = (props) => {
	return (
		<div className={"sidebar " + props.className}>
			<nav><a onClick={ this.hideSidebar } href="#">>></a></nav>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis facere iure adipisci velit libero at enim nemo recusandae voluptate, possimus et! Eaque odit hic quam ipsa nam deserunt et similique.
			</p>
		</div>
	)
}

			


