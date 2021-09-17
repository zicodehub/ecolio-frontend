import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';

import dataProvider from './dataProvider' 
import authProvider from './authProvider'

import Dashboard from './Dashboard'

import PostList from './pages/posts/list'
import {ListEleve ,CreateEleve, EditEleve} from './pages/eleve'
import {ListParente} from './pages/parente'
import {ListCycle, CreateCycle, EditCycle} from './pages/cycle'

const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider} >
        <Resource name="posts"   list={PostList}  />
        <Resource name="user"   list={ListGuesser} />
        <Resource name="group"   list={ListGuesser} />
        <Resource name="eleve"   list={ListEleve} create={CreateEleve} edit={EditEleve} />
        <Resource name="parent"   list={ListGuesser} />
        <Resource name="parentee"   list={ListParente} />
        <Resource name="cycle"   list={ListCycle} create={CreateCycle} edit={EditCycle} />
        <Resource name="niveau"   list={ListGuesser} />
        <Resource name="coefficient"   list={ListGuesser} />
        <Resource name="classe"   list={ListGuesser} />
        <Resource name="annee"   list={ListGuesser} />
        <Resource name="typenote"   list={ListGuesser} />
        <Resource name="note"   list={ListGuesser} />
        <Resource name="cours"   list={ListGuesser} />
        <Resource name="absenceenseignant"   list={ListGuesser} />
        <Resource name="absenceeleve"   list={ListGuesser} />
        <Resource name="typepaiement"   list={ListGuesser} />
        <Resource name="motifpaiement"   list={ListGuesser} />
        <Resource name="paiement"   list={ListGuesser} />
    </Admin>
);

export default App;