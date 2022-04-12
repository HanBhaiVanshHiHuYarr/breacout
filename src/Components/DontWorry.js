import React from 'react'
import Colleagues from "../Assets/colleagues.png";
import Join from "../Assets/Join.png";

function DontWorry({ isJoined}) {
  return (
		<>
			<div className='flex flex-col items-center justify-center'>
				<img src={Colleagues} />
				<h2 className='text-center p-2 font-semibold text-breacout900 text-2xl'>
					Dont hesitate, they are your colleagues.
				</h2>
				<div
					onClick={() => {
						isJoined(true);
					}}
					className='w-4/5 h-12 bg-green-200 rounded-md flex items-center justify-center relative my-2  hover:shadow-lg'>
					<img src={Join} alt='Join icon' className='px-2' />
					<h2 className='font-bold text-green-700 text-lg'>Join Them</h2>
				</div>
			</div>
		</>
	);
}

export default DontWorry