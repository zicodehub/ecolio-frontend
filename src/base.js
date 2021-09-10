// in src/App.js
import { useState, useEffect } from "react";

const axios = require('axios')

const App = () => {
	const [ mystate, setMyState ] = useState(0) 

	useEffect(()=>{
		let url = 'http://localhost:8000/api/auth/login/'
		let headers = {
			"Content-Type": "application/json"
		}

        return axios.post(
            url, 
            {
                username: 'admin', 
                password: 'admin', 
                client: 'admin',
                code: 'esatic' 
            },
            headers = headers
        )
        
         .then(response => {
        	console.log('okok')
    		setMyState("OK")        
        })
		.catch(err => {
			setMyState("ECHEC")
			console.log('errr')
		})

	}, [])

	return (<p> Hello {mystate} </p>)
}

export default App;
