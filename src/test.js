// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton  } from 'react-admin';

export const TestList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="rak" />
            <EditButton />
        </Datagrid>
    </List>
);
