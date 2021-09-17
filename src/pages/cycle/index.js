import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, ReferenceField } from 'react-admin';


export const CreateCycle = (props) => (
    <Create title="Créer un Nouvel Eleve" {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="nom" />
        </SimpleForm>
    </Create>
);

const Title = ({ record }) => {
    return <span>L'élève {record ? `"${record.nom}"` : ''}</span>;
};

export const EditCycle = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="nom" />
        </SimpleForm>
    </Edit>
);



export const ListCycle = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props}>       
            <Datagrid>
                <TextField source="id" />
                <TextField source="nom" />
            </Datagrid>
        </List>
    );
};


