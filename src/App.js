// // in src/App.js
// import { useState, useEffect } from "react";

// const axios = require('axios')

// let headers = {
// 	"Content-Type": "application/json"
// }

        
        

// const instance = axios.create({
//   baseURL: 'http://localhost:8000/api',
//   headers: headers
// });

// const App = () => {
// 	const [ mystate, setMyState ] = useState(0) 

// 	useEffect(()=>{
// 		// let url = 'http://localhost:8000/api/auth/login/'
// 		let url = '/auth/login/'
		
// 		return instance.post(
//             url, 
//             {
//                 username: 'admin', 
//                 password: 'admin', 
//                 client: 'admin',
//                 code: 'tee' 
//             }
//         )
//          .then(response => {
//         	console.log(response.data)
//     		setMyState("OK")        
//         })
// 		.catch(err => {
// 			setMyState("ECHEC")
// 			console.log('errr')
// 		})

// 	}, [])

// 	return (<p> Hello {mystate} </p>)
// }

// export default App;

import React from 'react';
import { Admin, Resource } from 'react-admin';
// import drfProvider from 'ra-data-drf';
import { UserList } from './users';
import { TestList } from './test';
import { PostList } from './posts'
import drfProvider from './dataProv'

import { fetchUtils } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const axios = require('axios')

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ "Content-Type": "application/json" });
    }
    // add your own headers here
    options.headers.set('X-Code', 'pbkdf2_sha256$260000$SsiiHXnDEVL6nf1TODZy2u$GLgjVmimzo+pcslbQzbOlY7hvXHaxl8knPDVXraDUTA=');
    return axios(url, options);
}
const dataProvider = simpleRestProvider('https://ecoli-test.herokuapp.com/api/', fetchJson);


const App = () => {

	return (
    <Admin dataProvider={dataProvider} >
        <Resource name="t1" list={PostList} />
    </Admin>
)};

export default App;