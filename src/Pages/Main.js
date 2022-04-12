import React, { useState } from "react";
import Dashboard from "../Components/Dashboard";
import Group from "../Components/Group";
import Vc from "../Components/Vc";

function Main() {
    const [group, setGroup] = useState("All Colleagues")

	return (
		<div className='w-screen h-screen bg-breacout100 flex'>
			<Group setGroup={setGroup}  />
            <div className='h-full grow '>
                {group == "All Colleagues" ?<Dashboard/> :<Vc/>}
			</div>
		</div>
	);
}

export default Main;
