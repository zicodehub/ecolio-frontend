import { Route } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, RouteWithoutLayout  } from 'react-admin';

const Foo = () => (
    <Card>
        <Title title="My Page" />
        <CardContent>
            ...
        </CardContent>
    </Card>
);

export default [
    // <Route exact path="/anne" component={Foo} />,
    // <RouteWithoutLayout exact path="/niveau" component={Foo} />,
];