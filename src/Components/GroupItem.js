import React from "react";

function GroupItem({ address, name, members, onchange }) {
	return (
		<div onClick={()=>{onchange(name)}} className='w-4/5 h-12 bg-white rounded-md flex items-center relative my-2 hover:shadow-lg '>
			<img src={address} alt='Politics group icon' className='px-2' />
			<h2 className='font-semibold text-breacout900 text-xl'>{name}</h2>
			<div className='bg-main500 rounded-xl px-4 absolute right-[-10px] top-[-10px]'>
				{members}
			</div>
		</div>
	);
}

export default GroupItem;
