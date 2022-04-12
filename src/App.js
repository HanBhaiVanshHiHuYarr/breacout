import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
function App() {
	return (
		<Routes>
      <Route path='/' element={<Home />} />
      
      { /*set main as protected route*/}
			<Route path='/main' element={<Main/>} />
		</Routes>
	);
}

export default App;
