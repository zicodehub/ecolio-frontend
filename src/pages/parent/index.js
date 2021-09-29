import { List, useReferenceArrayFieldController, ReferenceArrayField, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, ReferenceField } from 'react-admin';

const ReferenceTextChildren = ({sources}) => {
    // const val = useReferenceArrayFieldController({basePath: "http://localhost:8000/api/eleve"})
    // console.log(val)
    sources = sources.split(',')
    return (
        <>
            {
                sources.map( source => (
                    <> <TextField source={source}  /> </>
                )  )
            }            
        </>
    )
}

const filters = [
    <TextInput label="Nom" alwaysOn source="nom__icontains"  />,
    <TextInput label="Prenoms" source="prenoms__icontains" />,
];


export const ListParent = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props} filters={filters} >       
            <Datagrid>
                <TextField source="id" />
                <TextField source="nom" />
                <TextField source="prenoms" />
                <TextField source="enfants" />
                <ReferenceArrayField source="enfants" reference="eleve">
                    <ReferenceTextChildren sources="nom,prenoms"  />
                </ReferenceArrayField>
                <EditButton />
            </Datagrid>
        </List>
    );
};


