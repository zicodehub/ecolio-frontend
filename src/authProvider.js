import { fetchUtils } from 'react-admin';
const axios = require('axios')

export default {
    // called when the user attempts to log in
    login: ({ username, password }) => {

        let url = 'http://localhost:8000/api/auth/login/'
        // const request = new Request(url, {
        //     method: 'POST',
        //     body: JSON.stringify({ username: 'admin', password: 'admin', code: 'tee' }),
        //     headers: headers
        // });
        // // return fetchUtils.fetchJson(url, headers)
        // return fetch(request)

        return axios.post(
            url, 
            {
                username: 'admin', 
                password: 'admin', 
                client: 'admin',
                code: 'tee' 
            }
        )
        
         .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.data.token
        })
        .then(auth => {
            localStorage.setItem('auth', JSON.stringify(auth));
            return Promise.resolve()
        })
        .catch(() => {
            throw new Error('Network error')
        });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('auth');
        console.log("logout")
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        console.log("check errors")

        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        if(localStorage.getItem('auth')){
            console.log('YOU ARE AUTH')
        }
        return localStorage.getItem('auth')
            ? Promise.resolve()
            : Promise.reject();
        // return Promise.resolve()
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        console.log("get permissions")
        return Promise.resolve()
    },
};