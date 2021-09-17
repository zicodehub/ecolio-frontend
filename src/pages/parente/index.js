import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, ReferenceField } from 'react-admin';

export const ListParente = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props}>       
            <Datagrid>
                <TextField source="id" />
                <ReferenceField source="parent_eleve" reference="parent">
                    <TextField source="nom" />
                </ReferenceField>
                <ReferenceField source="eleve" reference="eleve">
                    <TextField source="nom" />
                </ReferenceField>
                <EditButton />
            </Datagrid>
        </List>
    );
};


