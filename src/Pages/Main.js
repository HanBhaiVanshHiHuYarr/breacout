import React from "react";
import Dashboard from "../Components/Dashboard";
import Group from "../Components/Group";

function Main() {
	return (
		<div className='w-screen h-screen bg-breacout100 flex'>
			<Group />
			<div className='h-full grow '>
				<Dashboard/>
			</div>
		</div>
	);
}

export default Main;
