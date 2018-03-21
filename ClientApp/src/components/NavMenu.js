import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from 'material-ui-icons/Home';
import PlusOneIcon from 'material-ui-icons/PlusOne';
import SwapHorizIcon from 'material-ui-icons/SwapHoriz';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
//import './NavMenu.css';

export default props => (
    <div>
        <List>
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/counter">
                <ListItemIcon>
                    <PlusOneIcon />
                </ListItemIcon>
                <ListItemText primary="Counter" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button component={Link} to="/fetchdata">
                <ListItemIcon>
                    <SwapHorizIcon />
                </ListItemIcon>
                <ListItemText primary="Fetch data" />
            </ListItem>
        </List>
    </div>
);
