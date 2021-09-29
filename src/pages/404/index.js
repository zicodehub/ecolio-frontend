import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Not Found" />
        <CardContent>
            <h1> 404: Non trouvé ! </h1>
        </CardContent>
    </Card>
);