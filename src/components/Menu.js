import { createElement } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import { withRouter } from 'react-router-dom';
import LabelIcon from '@material-ui/icons/Label';

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return (
        <div style = {{ marginTop: 10 }} >
            <MenuItemLink
                to=""
                primaryText="Dashboard"
                leftIcon={<LabelIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {
                resources.map( (resource, index) => {
                    return (
                        <MenuItemLink
                            key={index}
                            to= {`/${resource.name}`}
                            primaryText= {resource.name}
                            leftIcon={<LabelIcon name="star" />}
                            onClick={onMenuClick}
                            sidebarIsOpen={open}
                        />

                    )
                } )
            }
            <MenuItemLink
                to="/custom-route"
                primaryText="Miscellaneous"
                leftIcon={<LabelIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
        </div>
    );
}

export default withRouter(Menu);