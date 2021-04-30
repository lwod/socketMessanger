import React, {useState} from 'react'
import {Login} from "./components/Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useLocalStorage} from "./hooks/useLocalStorage";

import './index.css'
import Dashboard from "./components/Dashboard/Dashboard";
import {ContactsProvider} from "./contexts/ContactsContext";

const App = () => {
	
	const [id,setId] = useLocalStorage('id')
	
	const dashboard = (
		<ContactsProvider>
			<Dashboard id={id}/>
		</ContactsProvider>
	)
	
	return (
		
		id ? dashboard : <Login onIdSubmit={setId}/>
	);
}

export default App;
