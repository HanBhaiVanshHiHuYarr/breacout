import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal() {
    const navigate = useNavigate();
	return (
		<div className=' modal-blur fixed w-screen h-screen flex items-center justify-center '>
			<div className='w-2/5 h-auto bg-white drop-shadow-lg rounded-xl px-6 pt-10'>
				<h2 className='text-black font-semibold text-center text-3xl'>
					You have
				</h2>
				<h2 className='text-breacout300 font-bold text-center text-4xl'>3</h2>
				<h2 className='text-black font-semibold text-center text-3xl'>
					Breaks remaining
				</h2>
				<br />
				<p className='text-slate-300 text-lg text-center '>
					Your last break at <strong>9/04/22 14:40</strong> was of{" "}
					<strong>25 minutes</strong>
				</p>

				<div className='flex my-12'>
					<div className='w-1/2 flex flex-col items-center'>
						<h2 className='text-breacout900 font-semibold text-center text-xl'>
							Yeah
						</h2>
						<button
							onClick={() => {
								navigate("/main");
							}}
							className='rounded bg-breacout900 px-4 py-2 text-white text-xl font-semibold w-4/5'>
							Hop In
						</button>
					</div>
					<div className='w-1/2 flex flex-col items-center'>
						<h2 className='text-pink-600 font-semibold text-center text-xl'>
							Okay I'll
						</h2>
						<button
							onClick={() => {
								navigate(-1);
							}}
							className='rounded bg-pink-600 px-4 py-2 text-white text-xl font-semibold w-4/5'>
							Work
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
