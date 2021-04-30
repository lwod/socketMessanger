import React, {useState} from 'react'
import {Login} from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useLocalStorage} from "./hooks/useLocalStorage";

import './index.css'
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
	
	const [id,setId] = useLocalStorage('id')
	
	return (
		
		id ? <Dashboard id={id}/> : <Login onIdSubmit={setId}/>
	);
}

export default App;
