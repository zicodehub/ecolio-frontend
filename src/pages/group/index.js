import {
 List, Edit, Create, Datagrid, SimpleForm, TopToolbar,
 FilterList, FilterListItem, FilterLiveSearch,
 CreateButton, EditButton, ExportButton, DeleteButton, ShowButton,
 DateField, TextField, ReferenceField, SelectInput, ReferenceArrayInput,
 TextInput, DateInput, ReferenceInput,
 useListContext, useTranslate, useMediaQuery, useRecordContext, useDataProvider, useResourceContext
} from 'react-admin'

import ActionButton from '../../components/ActionButton'

export const ListGroup = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props}>       
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="permissions" />
                <ActionButton actions="show,edit,delete" />
            </Datagrid>
        </List>
    );
};

export const CreateGroup = (props) => (
    <Create  {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceInput source="permissions" reference="permission">
                <SelectInput optionText="codename" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const EditGroup = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceArrayInput source="permissions" reference="permission">
                <SelectInput optionText="codename" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export const ShowGroup = (props) => (
    <Edit  {...props}>
        <SimpleForm>
            <TextField source="name" />
            <ReferenceField source="permissions" reference="permission">
                <TextField source="codename" />
            </ReferenceField>
        </SimpleForm>
    </Edit>
);



export default {
    list: ListGroup,
    edit: EditGroup,
    create: CreateGroup,
    show: ShowGroup
}

