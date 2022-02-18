import { useState, useEffect } from 'react'
import {
 List, Edit, Create, Datagrid, SimpleForm, TopToolbar,
 FilterList, FilterListItem, FilterLiveSearch,
 CreateButton, EditButton, ExportButton, DeleteButton, ShowButton,
 DateField, TextField, ReferenceField, SelectInput,
 TextInput, DateInput, ReferenceInput,
 useListContext, useTranslate, useMediaQuery, useRecordContext, useDataProvider, useResourceContext
} from 'react-admin'

import { Card, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles, Chip } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOnOutlined';

const useQuickFilterStyles = makeStyles(theme => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)} />;
};




const ClasseFilter = () => {
    const translate = useTranslate()
    const { data } = useListContext()
    const dp =  useDataProvider()
    const [ classes, setClasses ] = useState(undefined)
    const resource = useResourceContext()
    let classes_set = new Set( Object.values(data).map( x => x.classe ) )
    useEffect( () => {
        // dp.getList( 'classe' )
        //     .then( ({data}) => { if (data) setClasses(data) } )
        //     .catch( err => alert("err getMany") )
    } , [] )
    // console.log(  )
    return (
            <FilterList
                label={translate("resources.Classroom")}
                icon={<MonetizationOnIcon />}
            >
                {
                    classes && classes.map( classe =>  (
                            <FilterListItem
                                label= { classe.nom }
                                value={{ classe: classe.id }}
                            />
                        )
                    )
                }
                <FilterListItem
                    label="Classe d'ids 4 et 5"
                    value={{ classe__in: '5,4' }}
                />
                <FilterListItem
                    label="Sans Classe"
                    value={{ classe: null }}
                />
            </FilterList>
    );
} 

const Aside = () => {
    return(
        <Card style={{marginLeft: 20}} >
            <CardContent>
                <ClasseFilter /> 
                <FilterLiveSearch source="prenoms" />
            </CardContent>
        </Card>
    )
}

const filters = [
    <QuickFilter source="nom" defaultValue="TOFFE" label="Toffe" /> ,
    // (<ReferenceInput source="classe" reference="classe">
    //     <SelectInput optionText="nom" />
    // </ReferenceInput>) ,
    <TextInput label="Nom et prénoms" source="nom"  />,
];

export const ListEleve = props => {
    // console.log(ReferenceField)
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List {...props} aside={<Aside />} filters={filters} >       
            <Datagrid>
                <TextField source="id" />
                <TextField source="nom" />
                <TextField source="prenoms" />
                <ReferenceField source="classe" reference="classe">
                    <>
                        <ReferenceField source="niveau" reference="niveau" link={false} >
                            <TextField source="nom" disabled />
                        </ReferenceField>
                        <span>      </span>
                        <TextField source="nom" />
                    </>
                </ReferenceField>
                <ShowButton />
                <EditButton />
                <DeleteButton />
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
            <ReferenceInput source="classe" reference="classe">
                <TextField source="nom" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

const Title = ({ record }) => {
    return <span>L'élève {record ? `"${record.nom}"` : ''}</span>;
};

export const EditEleve = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm warnWhenUnsavedChanges >
            <TextInput disabled source="id" />
            <TextInput source="nom" />
            <TextInput source="prenoms" />
            <ReferenceInput source="classe" reference="classe">
                <SelectInput optionText="nom" />
            </ReferenceInput>
            {/*<DateInput label="Publication date" source="published_at" />*/}
            {/*<TextInput disabled label="Nb views" source="views" />*/}
        </SimpleForm>
    </Edit>
);

export default {
    list: ListEleve,
    edit: EditEleve,
    create: CreateEleve
}