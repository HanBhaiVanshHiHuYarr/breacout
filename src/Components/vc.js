import React from "react";
import VCImage from "../Assets/vc.png";
import DontWorry from "./DontWorry";
import Camera from "../Assets/MeetingIcons/Camera.png";
import Menu from "../Assets/MeetingIcons/Menu.png";
import Mic from "../Assets/MeetingIcons/Mic.png";

function Vc({ join, isJoined }) {
	return (
		<>
			{/* top bar for time */}
			<div className='w-full h-12 bg-white rounded drop-shadow-md'>
				{/* Fetch time */}
				{join ? (
					<h2 className='text-center p-2 font-semibold text-black text-xl'>
						You are on a break for{" "}
						<span className='text-pink-600 font-bold'>1 Minutes</span>
					</h2>
				) : (
					<h2 className='text-center p-2 font-semibold text-black text-xl'>
						Join your colleagues to have a wonderful time
					</h2>
				)}
			</div>

			<div className='grow flex items-center justify-center'>
				{/* dw */}
				{join ? 
                    (<div className='flex flex-col items-center justify-items-center'>
					<img src={VCImage} />

					<div className='flex justify-center w-full h-14 mt-8'>
						<div className='bg-main100 w-3/5 h-full justify-around rounded-xl drop-shadow-lg flex p-2'>
							<img src={Camera} />
							<img src={Mic} />
							<img src={Menu} />
							<button
								onClick={() => {
									isJoined(false);
								}}
								className='bg-rose-100 text-rose-600 p-2 text-lg font-bold rounded-full px-8'>
								Leave
							</button>
						</div>
					</div>
				</div>)
                : <DontWorry isJoined={isJoined} />}

				{/* <img src = {VCImage}/> */}
			</div>
			{/* conditional rendering of vc */}
		</>
	);
}

export default Vc;
