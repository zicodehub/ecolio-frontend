import * as React from "react";
import {cloneElement} from 'react'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
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
import Eleve from './pages/eleve'
import Filiere from './pages/filiere'
import Niveau from './pages/niveau/index'
import Classe from './pages/classe'
import Annee from './pages/annee'
import Group from './pages/group'

const App = () => (
    <Admin 
    	title="My Custom Admin"
    	locale="fr" 
        theme={theme} 
        layout={Layout}
        customRoutes={customRoutes}
        loginPage={LoginPage} 
    	catchAll={NotFound}
    	i18nProvider={i18nProvider} 
    	dataProvider={dataProvider} 
    	authProvider={authProvider}  
    	dashboard={Dashboard} 
    	>

        <Resource name="annee" {...Annee} />
        <Resource name="cycle" list={ListGuesser} />
        <Resource name="niveau" {...Niveau} />
        <Resource name="filiere" {...Filiere} />
        <Resource name="classe" {...Classe} />
        <Resource name="eleve" {...Eleve} />
        <Resource name="parent" list={ListParent} edit={EditGuesser} />
        <Resource name="note" list={ListGuesser} />
        <Resource name="typenote" list={ListGuesser} />
        <Resource name="group" {...Group} />
        <Resource name="user" list={ListGuesser} />
        <Resource name="permission" list={ListGuesser} />
    </Admin>
);

export default App;