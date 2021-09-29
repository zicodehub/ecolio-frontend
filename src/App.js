import * as React from "react";
import {cloneElement} from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin';
import IconEvent from '@material-ui/icons/Event';

import theme from './constants/theme' 

import dataProvider from './providers/dataProvider' 
import authProvider from './providers/authProvider'
import i18nProvider from './providers/i18nProvider'

import Dashboard from './pages/Dashboard'
import NotFound from './pages/404'
import Layout from './components/Layout'
import Menu from './components/Menu'
import customRoutes from './constants/customRoutes';
import LoginPage from './pages/Login';
import LogoutButton from './components/LogoutButton';

import {ListParent} from './pages/parent'
import {ListEleve, CreateEleve, EditEleve} from './pages/eleve'
import { ListNiveau } from './pages/niveau'

const App = () => (
    <Admin 
    	title="My Custom Admin"
    	locale="fr" 
        theme={theme} 
        customRoutes={customRoutes}
    	layout={Layout} 
        loginPage={LoginPage} 
    	catchAll={NotFound}
    	i18nProvider={i18nProvider} 
    	dataProvider={dataProvider} 
    	authProvider={authProvider}  
    	dashboard={Dashboard} 
    	>

        <Resource name="annee" list={ListGuesser} />
        <Resource name="cycle" list={ListGuesser} />
        <Resource name="niveau" list={ListNiveau} />
        <Resource name="eleve" list={ListEleve} edit={EditEleve} create={CreateEleve} />
        <Resource name="parent" list={ListParent} />
        <Resource name="note" list={ListGuesser} />
        <Resource name="typenote" list={ListGuesser} />
        <Resource name="user" list={ListGuesser} />
        <Resource name="group" list={ListGuesser} />
    </Admin>
);


export default App;