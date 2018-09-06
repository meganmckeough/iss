import React from 'react'

// function hideSidebar(props) {
// 	return (
// 		<div className="sidebar">
// 			<nav onClick={ this.hideSidebar }> >> </nav>
// 			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis facere iure adipisci velit libero at enim nemo recusandae voluptate, possimus et! Eaque odit hic quam ipsa nam deserunt et similique.
// 			</p>
// 		</div>
// 	)
// }

export default function Sidebar(props) {
	return (
		<div className={"sidebar " + props.className}>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis facere iure adipisci velit libero at enim nemo recusandae voluptate, possimus et! Eaque odit hic quam ipsa nam deserunt et similique.
			</p>
		</div>
	)
}

// module.exports = { Sidebar, hideSidebar }
// add nav onClick this hideSidebar >> nav
			


