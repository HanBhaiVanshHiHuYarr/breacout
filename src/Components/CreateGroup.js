import React from 'react'
import Add from "../Assets/Group Icons/Add.png"

function CreateGroup() {
  return (
		<div className='w-4/5 h-12 bg-breacout900 rounded-md flex items-center relative my-2 hover:shadow-lg '>
			<img src={Add} alt='Add group icon' className='px-2' />
			<h2 className='font-semibold text-white text-lg'>Create a group</h2>
		</div>
	);
}

export default CreateGroup