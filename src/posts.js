// in src/users.js
import * as React from "react";
import {
    List,
    Datagrid,
    SimpleList,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


// const postFilters = [
//     <TextInput source="q" label="Search" alwaysOn />,

//     <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
//         <SelectInput optionText="name" />
//     </ReferenceInput>
// ];

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>       
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="content" />
                <EditButton />
            </Datagrid>
        </List>
    );
};

// export const PostEdit = props => (
//     <Edit title={<PostTitle />} {...props}>
//         <SimpleForm>
//             <TextInput disabled source="id" />
//             <ReferenceInput source="userId" reference="users">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <TextInput multiline  source="body" />
//         </SimpleForm>
//     </Edit>
// );

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline  source="body" />
        </SimpleForm>
    </Create>
);