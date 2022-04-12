import React, { useState } from "react";
import Dashboard from "../Components/Dashboard";
import Group from "../Components/Group";
import Vc from "../Components/Vc";

function Main() {
    const [group, setGroup] = useState("All Colleagues")
    const [join, isJoined] = useState(false)

	return (
		<div className='w-screen h-screen bg-breacout100 flex'>
			<Group setGroup={setGroup} isJoined = {isJoined} join = {join} />
            <div className='h-full grow flex flex-col'>
                {group == "All Colleagues" ? <Dashboard /> : <Vc join={join} isJoined={isJoined} />}
			</div>
		</div>
	);
}

export default Main;
