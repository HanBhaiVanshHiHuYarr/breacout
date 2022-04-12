import React from "react";

function ColleageItem({ address, name }) {
	return (
		<div className='w-4/5 h-12 bg-main500 rounded-md flex items-center relative my-2  hover:shadow-lg'>
			<img src={address} alt='Politics group icon' className='px-2' />
			<h2 className='font-semibold text-white text-lg'>{name}</h2>

			<div className='bg-green-500 rounded-xl h-4 w-4 absolute right-[-6px] top-[-6px]'></div>
		</div>
	);
}

export default ColleageItem;
