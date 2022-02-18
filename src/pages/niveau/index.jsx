import {
 List, Edit, Create, Datagrid, SimpleForm, TopToolbar, FilterLiveSearch,
 Button, DeleteButton, CreateButton, EditButton, SaveButton, ExportButton, ShowButton, SortButton, CloneButton, ListButton,
 DateField, TextField, ReferenceField, ReferenceManyField, SingleFieldList, ChipField,
 TextInput, DateInput,ReferenceInput, SelectInput, NullableBooleanInput, BooleanInput, NumberInput,
 useListContext, useTranslate, useMediaQuery, useRecordContext,
 sanitizeListRestProps, FormWithRedirect    
} from 'react-admin'

import IconEvent from '@material-ui/icons/Event';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ActionButton from '../../components/ActionButton'
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';
import { Typography, Box, Toolbar } from '@material-ui/core';

const ListActions = (props) => (
    <TopToolbar>
        <ExportButton/>
        {/* Add your custom actions */}
        <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
            <IconEvent/>
        </Button>
        <Button
            label="Eleves de classe id=4"
            color="secondary"
            component={Link}
            to={{
                pathname: '/eleve',
                search: stringify({
                    filter: {},
                    classe: 4
                })
            }}
        >
            <IconEvent/>
        </Button>
        <SortButton fields={[ 'annee', 'cycle']} />
        <FilterLiveSearch source="nom" label="OKO" />
    </TopToolbar>
);

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="nom"  />,
];


const Aside = () => {
    const { data, ids } = useListContext();
    const translate = useTranslate()

    return(
    <div style={{ width: '30%', margin: '1em' }}>
        <h6 variant="h6">Post details</h6>
        <h2 variant="body2">
            Total views: {ids.map(id => id)}
        </h2>
    </div>
    )
}

const Expanded = () => (
    <>
        <ReferenceManyField label="Classes associées" reference="classe" target="niveau" >
            <SingleFieldList>
                <ChipField source="nom" />
            </SingleFieldList>
        </ReferenceManyField>
    </>
);

const ListNiveau = props => {
    return (
        <List  {...props} aside={<Aside />} actions={<ListActions /> } rowClick="edit"  >
            <Datagrid expand={<Expanded />} >
                <TextField source="id" sortable={false} />
                <TextField source="nom" />
                <ReferenceField source="annee" reference="annee">
                    <TextField source="nom" />
                </ReferenceField>
                <ReferenceField source="cycle" reference="cycle">
                    <TextField source="nom" />
                </ReferenceField>
                <ActionButton actions="show,edit,delete" />
                <CloneButton />
            </Datagrid>
        </List>
    );
};

const PostEditActions = ({ basePath, data }) => (
    <TopToolbar >
        <ListButton basePath={basePath} label="Retour" icon={<ChevronLeft />} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>);


const VisitorForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            // here starts the custom form layout
            <form>
                <Box p="1em">
                    <Box display="flex">
                        <Box flex={1} mr="1em">

                            <Box flex={1} ml="0.5em">
                                <ReferenceField label="Année" resource="OKOKO" source="annee" reference="annee"  >
                                    <TextField source="nom" label="Annee scolaire" resource="Annerrr" />
                                </ReferenceField>
                            </Box>

                            <Box display="flex" >
                                <Box flex={1} ml="0.5em">
                                    <TextField addLabel source="nom" label="Annee scolaire" resource="Annerrr" fullWidth />
                                </Box>
                                <Box flex={2} ml="0.5em">
                                    <ReferenceInput label="Cycle" source="cycle" reference="cycle">
                                        <SelectInput optionText="nom" />
                                    </ReferenceInput>
                                </Box>
                            </Box>
                        </Box>

        
                    </Box>
                </Box>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <SaveButton
                            saving={formProps.saving}
                            handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                            mutationMode="pessimistic"
                        />
                        <DeleteButton record={formProps.record} undoable={false} />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
);

const EditNiveau = (props) => (
    <Edit actions={<PostEditActions />}  undoable={false}  {...props}>
        {/*<SimpleForm  >
            <ReferenceField label="Année" source="annee" reference="annee"  >
                <TextField source="nom" />
            </ReferenceField>
            <TextInput source="nom"  />
            <ReferenceInput label="Cycle" source="cycle" reference="cycle">
                <SelectInput optionText="nom" />
            </ReferenceInput>

        </SimpleForm>*/}
        <VisitorForm />
    </Edit>
);


const CreateNiveau = (props) => {
    return (
        <Create  {...props}>
            <SimpleForm>
                <ReferenceInput label="Année" source="annee" reference="annee">
                    <SelectInput optionText="nom" />
                </ReferenceInput>
                <TextInput source="nom"  />
                <ReferenceInput label="Cycle" source="cycle" reference="cycle">
                    <SelectInput optionText="nom" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    )
} 

const ShowNiveau = (props) => (
    <Edit {...props}>
        <SimpleForm>
                <TextField source="nom" />
                <ReferenceField source="annee" reference="annee">
                    <TextField source="nom" />
                </ReferenceField>
                <ReferenceField source="cycle" reference="cycle">
                    <TextField source="nom" />
                </ReferenceField>
                <ReferenceManyField label="Classes associées" reference="classe" target="niveau" >
                    <SingleFieldList>
                        <ChipField source="nom" />
                    </SingleFieldList>
                </ReferenceManyField>

            {/*<DateInput label="Publication date" source="published_at" />*/}
            {/*<TextInput disabled label="Nb views" source="views" />*/}
        </SimpleForm>
    </Edit>
);


const Title = ({ record }) => {
    return <span>L'élève {record ? `"${record.nom}"` : ''}</span>;
};

const Fonction = ( { record }) => {
    return <div className = "card" /> 
}

export default {
    list: ListNiveau,
    edit: EditNiveau,
    create: CreateNiveau,
    show: ShowNiveau
}