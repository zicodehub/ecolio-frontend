// in src/App.js
import { useState, useEffect } from "react";

const axios = require('axios')

let headers = {
	"Content-Type": "application/json"
}

        
        


const App = () => {
	const [ mystate, setMyState ] = useState(0) 

	useEffect(()=>{
		
		return axios({
            url: "https://google.com",
            method: "get",
            data: {
                username: "admin",
                password : "admin",
                client: "admin",
                code: "SUPER_USER_DB"
            },
            headers: new Headers({
                "Content-Type": "application/json"
            })
            
        })
         .then(response => {
        	console.log(response)
    		setMyState("OK")        
        })
		.catch(err => {
			setMyState("ECHEC")
			console.log(err, 'errr')
		})

	}, [])

	return (<p> Hello moi {mystate} </p>)
}

export default App;
