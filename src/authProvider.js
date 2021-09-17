import { fetchUtils } from 'react-admin';
import dataProvider from './dataProvider'

export default {
    // called when the user attempts to log in
    login: ({ username, password, code }) => {

        return dataProvider.create('auth/login/', {
            data : {
                username: username,
                password: password,
                client: username,
                code: 'SUPER_USER_DB'
            }
        } )
        
         .then((data, status, statusText) => {
            if (status < 200 || status >= 300) {
                throw new Error(statusText);
            }
            localStorage.setItem('auth', JSON.stringify(data.auth));
            localStorage.setItem('x-code', JSON.stringify(data["X-Code"]));
            return Promise.resolve()
        })
        .catch(() => {
            throw new Error('Problème de connexion')
        });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('auth');
        localStorage.removeItem('x-code');
        console.log("logout")
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            // localStorage.removeItem('auth');
            // localStorage.removeItem('x-code');
            return Promise.reject();
        }
        console.log("check errors")

        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        if(localStorage.getItem('auth') && localStorage.getItem('x-code') ){
            console.log('YOU ARE AUTH')
            return Promise.resolve()
        }
        else {
            console.log('You are not authenticated')
            return Promise.reject();

        }
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: (props) => {
        console.log("get permissions with", props)
        return Promise.resolve()
    },
};