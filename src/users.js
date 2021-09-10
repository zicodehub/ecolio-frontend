// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton  } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);
