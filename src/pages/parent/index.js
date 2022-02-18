import { List, useReferenceArrayFieldController, ReferenceArrayField, ReferenceManyField, SingleFieldList, ChipField, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, ReferenceField } from 'react-admin';

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
                <ReferenceManyField label="Mes enfants" reference="eleve" target="parent"  >
                    <SingleFieldList>
                        <ChipField source="nom" />
                    </SingleFieldList>
                </ReferenceManyField>

                <EditButton />
            </Datagrid>
        </List>
    );
};


