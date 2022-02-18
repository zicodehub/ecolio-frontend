import {
 List, Edit, Create, Datagrid, SimpleForm, TopToolbar,
 CreateButton, EditButton, ExportButton, FilterButton,
 DateField, TextField, ReferenceField, SelectInput,
 TextInput, DateInput, ReferenceInput,
 useListContext, useTranslate, useMediaQuery, useRecordContext
} from 'react-admin'
import ActionButton from '../../components/ActionButton'

const ListClasse = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props} filters={[ <FilterButton source = "nom"  label="On cause"  /> ]}  >       
            <Datagrid>
                <TextField source="id" />
                <>
                    <ReferenceField source="niveau" reference="niveau" link={false} >
                        <TextField source="nom"  />
                    </ReferenceField>
                    <span>  </span>
                    <TextField source="nom" />
                    <span> - </span>
                    <ReferenceField source="filiere" reference="filiere" link={false} >
                        <TextField source="nom" />
                    </ReferenceField>
                </>
                <ActionButton actions="show,edit,delete" />
            </Datagrid>
        </List>
    );
};

const EditClasse = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="niveau" reference="niveau">
                <SelectInput optionText="nom"  />
            </ReferenceInput>
            <ReferenceInput source="filiere" reference="filiere">
                <SelectInput optionText="nom" />
            </ReferenceInput>
            <TextInput source="nom" label="Nom de la classe" placeholder="A,B,C ou 1, 2, 3..." />
        </SimpleForm>
    </Edit>
);

const CreateClasse = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="niveau" reference="niveau">
                <SelectInput optionText="nom"  />
            </ReferenceInput>
            <ReferenceInput source="filiere" reference="filiere">
                <SelectInput optionText="nom" />
            </ReferenceInput>
            <TextInput source="nom" label="Nom de la classe" placeholder="A,B,C ou 1, 2, 3..." />
        </SimpleForm>
    </Create>
);


const ShowClasse = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceField source="niveau" reference="niveau">
                <TextField source="nom" />
            </ReferenceField>
            <ReferenceField source="filiere" reference="filiere">
                <TextField source="nom" emptyText="---" />
            </ReferenceField>
            <TextField source="nom" label="Nom de la classe" placeholder="lllC ou 1, 2, 3..." />
        </SimpleForm>
    </Edit>
);




export default {
    list: ListClasse,
    edit: EditClasse,
    create: CreateClasse,
    show: ShowClasse
}