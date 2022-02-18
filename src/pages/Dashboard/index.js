import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap'

import { useTranslate } from 'react-admin';

export default () => {
	const translate = useTranslate();
	return (
      <Card style={{ display: 'flex', width: '100%', height : '100%' }}>
      	<h1> {translate("Dashboard")} </h1>
      </Card>
	)
};

// <Schedule style={{  width: '100%', height : '100%' }} />
