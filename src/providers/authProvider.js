import { fetchUtils } from 'react-admin';
import dataProvider from './dataProvider'

import axiosInstance, { axiosAuthInstance, refresh } from './axiosInstance'

export default {
    // called when the user attempts to log in
    login: ({ username, password, code }) => {

        return axiosAuthInstance({
            url: '/auth/login/', 
            method: "post",
            data: {
                username: username,
                password: password,
                client: username,
                code: code
            } 
        })
        
         .then(({data, status, statusText}) => {
            if (status < 200 || status >= 300) {
                throw new Error(statusText);
            }
            else {
                localStorage.setItem('auth', data['token']);
                localStorage.setItem('x-code', data["X-Code"]);
                refresh()

            }
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
    checkError: (err) => {
        if (err.status === 401 || err.status === 403) {
            // localStorage.removeItem('auth');
            // localStorage.removeItem('x-code');
            console.log(err)
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