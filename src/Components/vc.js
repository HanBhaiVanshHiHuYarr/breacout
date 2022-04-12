import React from 'react'

function vc() {
  return (
		<>
			{/* top bar for time */}
			<div className='w-full h-12 bg-white rounded drop-shadow-md'>
				{/* Fetch time */}
				<h2 className='text-center p-2 font-semibold text-black text-xl'>
					You are on a break for{" "}
					<span className='text-pink-600 font-bold'>23 Minutes</span>
				</h2>
			</div>
			{/* conditional rendering of vc */}
		</>
	);
}

export default vc