import { Layout, AppBar, Menu as Mu } from 'react-admin';
import { Box } from '@material-ui/core';
import LocaleSwitcher from './LocaleSwitcher'
import Menu from './Menu'

const MyAppBar = props => {
	 return (
	    <AppBar {...props}>
	    	<h2> Titre </h2>
			<Box flex="1" />
	        < LocaleSwitcher />
	    </AppBar>

	);
} 

export default props => <Layout {...props} appBar={MyAppBar} />;
