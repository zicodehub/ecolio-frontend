import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, ReferenceField } from 'react-admin';

export const ListEleve = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props}>       
            <Datagrid>
                <TextField source="id" />
                <TextField source="nom" />
                <TextField source="prenoms" />
                <TextField source="classe" />
                <ReferenceField source="parent" reference="parent">
                    <TextField source="nom" />
                </ReferenceField>

                <EditButton />
            </Datagrid>
        </List>
    );
};

export const CreateEleve = (props) => (
    <Create title="Créer un Nouvel Eleve" {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nom" />
            <TextInput source="prenoms" />
            <TextInput source="classe"  />
            <TextInput source="parent" />
        </SimpleForm>
    </Create>
);

const Title = ({ record }) => {
    return <span>L'élève {record ? `"${record.nom}"` : ''}</span>;
};

export const EditEleve = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="nom" />
            <TextInput source="prenoms" />
            <TextInput  source="classe" />
            {/*<DateInput label="Publication date" source="published_at" />*/}
            <TextInput source="parent" />
            {/*<TextInput disabled label="Nb views" source="views" />*/}
        </SimpleForm>
    </Edit>
);

