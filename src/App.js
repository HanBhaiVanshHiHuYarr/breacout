import Navbar from "./Components/Navbar";
import coffeeImg from "./Assets/Coffee.png";
import { useState } from "react";
import Modal from "./Components/Modal";

function App() {

  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {

    //if pass is matched
    setShow(true)
    
    e.preventDefault();
	};

	return (
		<div className='w-screen h-screen bg-breacout100 flex flex-col'>
			<Navbar />
			<div className='grow flex'>
				<div className='w-1/2 py-16 px-14 flex flex-col  justify-evenly'>
					<div>
						<h1 className='font-semibold text-breacout300 text-7xl'>
							Need some break ?
						</h1>
						<h3 className='text-black text-4xl font-light'>
							GRAB A COFFEE AND HOP IN
						</h3>
						<h3 className='text-black text-2xl py-2 font-light line-through'>
							WORK TALKS
						</h3>
					</div>
					<div>
						<form className=' p-2' onSubmit={handleSubmit}>
							<div className='flex'>
								<div>
									<label for='name'>Breacout-ID</label>
									<br />
									<input
										id='name'
										type='text'
										placeholder='Eg :- INV-SWE-23'
										required
										className='p-2 rounded-2xl border-2 border-solid border-breacout900 mr-6'
										value={uid}
										onChange={(e) => setUid(e.target.value)}
									/>
								</div>
								<div>
									<label for='pass'>Password</label>
									<br />
									<input
										id='pass'
										type='password'
										placeholder='********'
										required
										className='p-2 rounded-2xl border-2 border-solid border-breacout900'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>
							<button
								type='submit'
								className='rounded-2xl bg-breacout900 px-4 py-2 text-white font-semibold mt-5'>
								Let me in <i className='fa-solid fa-angles-right'></i>
							</button>
						</form>
					</div>
				</div>
				<div className='w-1/2 flex justify-center items-center '>
					<img src={coffeeImg} style={{ height: "90vh" }}></img>
				</div>
			</div>
			{show && <Modal />}
		</div>
	);
}

export default App;
