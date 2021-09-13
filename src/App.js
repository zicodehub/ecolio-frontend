import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';

import dataProvider from './dataProv' 

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts"   list={ListGuesser} />
        <Resource name="users"   list={ListGuesser} />
    </Admin>
);

export default App;