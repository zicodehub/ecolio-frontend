import {
 List, Edit, Create, Datagrid, SimpleForm, TopToolbar,
 Button, CreateButton, EditButton, ExportButton, 
 DateField, TextField, ReferenceField, 
 TextInput, DateInput,
 useListContext, useTranslate, useMediaQuery, 
 sanitizeListRestProps
} from 'react-admin'

const ListActions = (props) => {
    const {
        className,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        total,
    } = useListContext();
    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            <CreateButton />
            <ExportButton disabled={total === 0} maxResults={maxResults} />
            {/* Add your custom actions */}
            <Button
                onClick={() => { alert('Your custom action'); }}
                label="Show calendar"
            >
                Boutton
            </Button>
        </TopToolbar>
    );
};

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


export const ListNiveau = props => {
/*    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
*/    return (
        <List  {...props} aside={<Aside />}  exporter={false} filter={{id: 2}}  >       
            <Datagrid>
                <TextField source="id" />
                <TextField source="nom" />
                <ReferenceField source="annee" reference="annee">
                    <TextField source="nom" />
                </ReferenceField>
                <ReferenceField source="cycle" reference="cycle">
                    <TextField source="nom" />
                </ReferenceField>
                <EditButton />
            </Datagrid>
        </List>
    );
};
