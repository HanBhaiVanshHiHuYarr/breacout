import React from "react";
import coin from "../Assets/coin.png";
import { Chart } from "react-google-charts";

function Dashboard() {
	const data = [
		["Days", "Time Spent"],
		["Monday", 40],
		["Tuesday", 22],
		["Wednesday", 60],
		["Thursday", 75],
		["Friday", 33],
	];
	const options = {
		title: "Social Score",
		curveType: "function",
		legend: { position: "bottom" },
	};
	return (
		<div className='w-full h-full flex flex-col'>
			<div className='w-full h-24  px-10 flex items-center justify-between'>
				<h2 className=' font-bold text-black text-4xl'>
					{/* Change Dynammically according to Name  */}
					Welcome Vansh !
				</h2>

				<div className='flex bg-white rounded-lg items-center px-3'>
					<h2 className=' font-bold text-black text-2xl pr-2'>
						{/* Change Dynammically according to user  */}
						250
					</h2>
					<img src={coin} className='h-full w-auto' />
				</div>
			</div>

			{/* main dashboard */}
			<div className='grow pb-3 px-4'>
				<div className='h-2/5 flex items-center justify-center'>
					<div className=' bg-white h-[94%] w-[98%] rounded-lg drop-shadow-lg flex'>
						<div className='bg-red-100 w-1/3 rounded-lg flex flex-col'>
							<h2 className=' font-bold text-black text-center text-2xl pt-2'>
								Weekly Tasks
							</h2>
							<div className='grow overflow-auto flex flex-col w-full items-center'>
								<div className='flex items-center h-10 bg-white w-[96%] rounded-lg p-2 my-2'>
									<h2 className=' font-bold text-black text text-lg pr-1'>5</h2>
									<img src={coin} className='h-full w-auto pr-2' />
									<p className=' text-black font-medium text text-sm'>
										Make 5 new friends
									</p>
								</div>
								<div className='flex items-center h-10 bg-white w-[96%] rounded-lg p-2 my-2'>
									<h2 className=' font-bold text-black text text-lg pr-1'>
										10
									</h2>
									<img src={coin} className='h-full w-auto pr-2' />
									<p className=' text-black font-medium text text-sm'>
										4 Times lunch
									</p>
								</div>
								<div className='flex items-center h-10 bg-white w-[96%] rounded-lg p-2 my-2'>
									<h2 className=' font-bold text-black text text-lg pr-1'>
										15
									</h2>
									<img src={coin} className='h-full w-auto pr-2' />
									<p className=' text-black font-medium text text-sm'>
										Spend 15 minutes in a VC
									</p>
								</div>
							</div>
						</div>
						<div className='w-2/3'>
							<Chart
								chartType='AreaChart'
								width='96%'
								height='100%'
								data={data}
								options={options}
							/>
						</div>
					</div>
				</div>
				<div className='h-3/5 flex items-center justify-around'>
					<div className=' bg-white h-[96%] w-[48%] rounded-lg drop-shadow-lg'>
						<h2 className=' font-bold text-black text-center text-2xl pt-2'>
							Activity
						</h2>
					</div>
					<div className=' bg-white h-[96%] w-[48%] rounded-lg drop-shadow-lg'>
						<h2 className=' font-bold text-black text-center text-2xl pt-2'>
							Activity
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
