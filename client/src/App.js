import React, {useState} from 'react'
import {Login} from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useLocalStorage} from "./hooks/useLocalStorage";

const App = () => {
	
	const [id,setId] = useLocalStorage()
	
	return (
		<div className="App">
			{id}
			<Login onIdSubmit={setId}/>
		</div>
	);
}

export default App;
