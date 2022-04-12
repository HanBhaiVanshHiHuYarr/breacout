import React, { useEffect, useState } from "react";
import GroupItem from "./GroupItem";
import AllColleagues from "../Assets/Group Icons/Politics.png";
import Movies from "../Assets/Group Icons/Movies.png";
import Party from "../Assets/Group Icons/Party.png";
import Timepass from "../Assets/Group Icons/Timepass.png";
import IndividualItem from "./IndividualItem";
import Avatar1 from "../Assets/People Images/Ellipse 1.png";
import Avatar2 from "../Assets/People Images/Ellipse 2.png";
import Avatar3 from "../Assets/People Images/Ellipse 3.png";
import Avatar4 from "../Assets/People Images/Ellipse 4.png";
import Join from "../Assets/Join.png";
import ColleageItem from "./ColleageItem";
import CreateGroup from "./CreateGroup";

function Group({ setGroup , isJoined, join}) {
	const [selected, setSelected] = useState("All Colleagues");
	const peopledata = {
		AllColleagues: [
			{ name: "Devansh Bansal", image: Avatar1 },
			{ name: "Dev Wadhwa", image: Avatar2 },
			{ name: "Ayush Meena", image: Avatar3 },
			{ name: "Pulkesh Parwani", image: Avatar4 },
			{ name: "Divyansh Jain", image: Avatar1 },
			{ name: "Tamanna Arora", image: Avatar2 },
			{ name: "Ayush Chopra", image: Avatar3 },
			{ name: "Pranay Bansal", image: Avatar4 },
		],
		Movies: [
			{ name: "Pulkesh Parwani", image: Avatar4 },
			{ name: "Divyansh Jain", image: Avatar1 },
			{ name: "Tamanna Arora", image: Avatar2 },
			{ name: "Ayush Chopra", image: Avatar3 },
			{ name: "Pranay Bansal", image: Avatar4 },
		],
		Party: [
			{ name: "Devansh Bansal", image: Avatar1 },
			{ name: "Dev Wadhwa", image: Avatar2 },
			{ name: "Ayush Meena", image: Avatar3 },
			{ name: "Pulkesh Parwani", image: Avatar4 },
		],
		Timepass: [
			{ name: "Pulkesh Parwani", image: Avatar4 },
			{ name: "Divyansh Jain", image: Avatar1 },
			{ name: "Tamanna Arora", image: Avatar2 },
		],
	};

	useEffect(() => {
		setGroup(selected);
	}, [selected]);

	return (
		<>
			<div className='h-full w-1/6 bg-main200'>
				<div className='h-1/2'>
					<h2 className='text-center p-2 font-semibold text-black text-2xl'>
						Groups
					</h2>
					<div className='flex flex-col items-center max-h-4/5'>
						<GroupItem
							address={AllColleagues}
							name='All Colleagues'
							members={8}
							onchange={setSelected}
							setJoin={isJoined}
						/>
						<GroupItem
							address={Movies}
							name='Movies'
							members={5}
							onchange={setSelected}
							setJoin={isJoined}
						/>
						<GroupItem
							address={Party}
							name='Party'
							members={4}
							onchange={setSelected}
							setJoin={isJoined}
						/>
						<GroupItem
							address={Timepass}
							name='Timepass'
							members={3}
							onchange={setSelected}
							setJoin={isJoined}
						/>
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
					{selected}
				</h2>
				<div className='flex flex-col items-center max-h-4/5'>
					{peopledata[selected.replace(/\s+/g, "")].map((item) => {
						return <ColleageItem address={item.image} name={item.name} />;
					})}

					{selected != "All Colleagues" &&
						(join ? (
							<button
								onClick={() => {
									isJoined(false);
								}}
								className='bg-rose-100 text-rose-600 p-2 text-lg font-bold rounded-full px-8'>
								Leave
							</button>
						) : (
							<div
								onClick={() => {
									isJoined(true);
								}}
								className='w-4/5 h-12 bg-green-200 rounded-md flex items-center relative my-2  hover:shadow-lg'>
								<img src={Join} alt='Join icon' className='px-2' />
								<h2 className='font-bold text-green-700 text-lg'>Join Them</h2>
							</div>
						))}
				</div>
			</div>
		</>
	);
}

export default Group;
