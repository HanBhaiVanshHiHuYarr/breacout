import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/main' element={<h1>jfksfsdfs</h1>} />
		
		</Routes>
	);
}

export default App;
