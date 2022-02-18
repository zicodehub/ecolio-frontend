import {
 List, Edit, Create, Datagrid, SimpleForm, TopToolbar,
 FilterList, FilterListItem, FilterLiveSearch,
 CreateButton, EditButton, ExportButton, DeleteButton, ShowButton,
 DateField, TextField, ReferenceField, SelectInput,
 TextInput, DateInput, ReferenceInput,
 useListContext, useTranslate, useMediaQuery, useRecordContext, useDataProvider, useResourceContext
} from 'react-admin'

import ActionButton from '../../components/ActionButton'

export const ListFiliere = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props}>       
            <Datagrid>
                <TextField source="id" />
                <TextField source="nom" />
                <ActionButton actions="show,edit,delete" />
            </Datagrid>
        </List>
    );
};

export const CreateFiliere = (props) => (
    <Create  {...props}>
        <SimpleForm>
            <TextInput source="nom" />
        </SimpleForm>
    </Create>
);

export const EditFiliere = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nom" />
        </SimpleForm>
    </Edit>
);

export const ShowFiliere = (props) => (
    <Edit  {...props}>
        <SimpleForm>
            <TextField source="nom" />
        </SimpleForm>
    </Edit>
);



export default {
    list: ListFiliere,
    edit: EditFiliere,
    create: CreateFiliere,
    show: ShowFiliere
}

