import {
 List, Edit, Create, Datagrid, SimpleForm, TopToolbar,
 FilterList, FilterListItem, FilterLiveSearch,
 CreateButton, EditButton, ExportButton, DeleteButton, ShowButton,
 TextField, DateField, ReferenceField, SelectField, BooleanField,
 TextInput, DateInput, ReferenceInput, SelectInput, BooleanInput,
 useListContext, useTranslate, useMediaQuery, useRecordContext, useDataProvider, useResourceContext
} from 'react-admin'

import ActionButton from '../../components/ActionButton'

import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const IdentifierField = ({ record }) => (
    <Typography>{record.id}</Typography>
);

const CreateRelatedNiveauBtn = ({ record }) => (
    <Button
        component={Link}
        to={{
            pathname: '/niveau/create',
            state: { record: { annee: record.id } },
        }}
    >
        Ajouter un niveau
    </Button>
);


export const ListAnnee = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props}>       
            <Datagrid>
                <TextField source="id" />
                <TextField source="nom" />
                <DateField source="date_debut" />
                <DateField source="date_fin" />
                <BooleanField source="ouvert" />
                <ActionButton actions="show,edit,delete" />
                <CreateRelatedNiveauBtn />
            </Datagrid>
        </List>
    );
};

export const CreateAnnee = (props) => (
    <Create  {...props}>
        <SimpleForm >
            <TextInput source="nom" />
        </SimpleForm>
    </Create>
);

export const EditAnnee = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nom" />
            <DateInput source="date_debut" />
            <DateInput source="date_fin" />
            <BooleanInput source="ouvert" />
        </SimpleForm>
    </Edit>
);

export const ShowAnnee = (props) => (
    <Edit  {...props}>
        <SimpleForm>
            <TextField source="nom" />
            <DateField source="date_debut" />
            <DateField source="date_fin" />
            <BooleanField source="ouvert" />
        </SimpleForm>
    </Edit>
);



export default {
    list: ListAnnee,
    edit: EditAnnee,
    create: CreateAnnee,
    show: ShowAnnee
}

