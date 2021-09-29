import React, { Component } from "react";
import './Login.css'

import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import authProvider from '../../providers/authProvider'
import { Redirect } from 'react-router-dom'

import theme from '../../constants/theme'

// const MyLoginPage = ({ theme }) => {

//     const [isAuth, setAuth] = useState(false);

//     authProvider.checkAuth()
//         .then( () => console.log('okokokokoko') )
//         .cath( () => console.log('nononono') )

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const login = useLogin();
//     const notify = useNotify();
//     const submit = e => {
//         e.preventDefault();
//         login({ email, password }).catch(() =>
//             notify('Invalid email or password')
//         );
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <form onSubmit={submit}>
//                 <input
//                     name="username"
//                     type="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                     className= "col-lg-3"
//                 />
//                 <input
//                     name="password"
//                     type="password"
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                 />

//                 <input
//                     type="submit"
//                 />
//             </form>
//             <Notification />
//         </ThemeProvider>
//     );
// };


// export default MyLoginPage

export default (props) => {

    const [code, setCode] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const login = useLogin();
    const notify = useNotify();
    
    const submit = e => {
        e.preventDefault();
        login({ username, password, code }).catch(() =>
            notify('Informations incorrectes !')
        );
    };


    return(
        <ThemeProvider theme={theme}>
            <form id="loginform">
                <h2 id="headerTitle">Connexion</h2>
                <div>
                    <FormInput onChange={e => setCode(e.target.value)} name="code" description="Code école" placeholder="Le matricule de votre école" type="text"/>
                    <FormInput onChange={e => setUsername(e.target.value)} name="username" description="Téléphone" placeholder="Votre numéro de téléphone" type="text" />
                    <FormInput onChange={e => setPassword(e.target.value)} name="password" description="Mot de passe" placeholder="Votre mot de passe" type="password"/>
                    <FormButton title="Valider" submit={ e => submit(e) } />
                </div>
              <Notification />
          </form>
        </ThemeProvider>
    )
}


const FormButton = props => (
  <div id="button" class="row">
    <button onClick={props.submit} >  {props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input {...props} />
  </div>  
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Twitter = props => (
  <a href="#" id="twitterIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);
