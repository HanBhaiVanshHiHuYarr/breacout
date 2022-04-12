import React from "react";
import GroupItem from "./GroupItem";
import Politics from "../Assets/Group Icons/Politics.png";
import Movies from "../Assets/Group Icons/Movies.png";
import Party from "../Assets/Group Icons/Party.png";
import Timepass from "../Assets/Group Icons/Timepass.png";
import IndividualItem from "./IndividualItem";
import Avatar1 from "../Assets/People Images/Ellipse 1.png";
import Avatar2 from "../Assets/People Images/Ellipse 2.png";
import Avatar3 from "../Assets/People Images/Ellipse 3.png";
import Avatar4 from "../Assets/People Images/Ellipse 4.png";
import ColleageItem from "./ColleageItem";
import CreateGroup from "./CreateGroup";

function Group() {
	return (
		<>
			<div className='h-full w-1/6 bg-main200'>
				<div className='h-1/2'>
					<h2 className='text-center p-2 font-semibold text-black text-2xl'>
						Groups
					</h2>
					<div className='flex flex-col items-center max-h-4/5'>
						<GroupItem address={Politics} name='All Colleagues' members={10} />
						<GroupItem address={Movies} name='Movies' members={3} />
						<GroupItem address={Party} name='Party' members={5} />
						<GroupItem address={Timepass} name='Timepass' members={2} />
						<CreateGroup />
					</div>
				</div>
				<div className='h-1/2'>
					<h2 className='text-center p-2 font-semibold text-black text-2xl'>
						Friends
					</h2>
					<div className='flex flex-col items-center max-h-4/5'>
						<IndividualItem
							address={Avatar1}
							name='Vansh Gupta'
							isOnline='true'
						/>
						<IndividualItem address={Avatar2} name='Yash Jain' />
						<IndividualItem
							address={Avatar3}
							name='Vibhor Sharma'
							isOnline='true'
						/>
						<IndividualItem address={Avatar4} name='Aagam Shah' />
					</div>
				</div>
			</div>
			<div className='h-full w-1/6 bg-main100'>
				<h2 className='text-center p-2 font-semibold text-black text-2xl'>
					{/* Change Dynammically according to option selected on left  */}
					All Colleagues
				</h2>
				<div className='flex flex-col items-center max-h-4/5'>
					{/* Change Dynammically according to option selected on left  */}
					<ColleageItem address={Avatar1} name='Devansh Bansal' />
					<ColleageItem address={Avatar2} name='Dev Wadhwa' />
					<ColleageItem address={Avatar3} name='Ayush Meena' />
					<ColleageItem address={Avatar4} name='Pulkesh Parwani' />
				</div>
			</div>
		</>
	);
}

export default Group;
