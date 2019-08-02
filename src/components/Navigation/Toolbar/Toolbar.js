import React from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <div className={classes.inbox}>
            <div>
                <DrawerToggle />
                <NavLink
                    className={classes.logo}
                    to="/"
                    exact>⏁  Trobot</NavLink>
                <nav>
                    <NavigationItems
                        isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </div>
    </header>
);

export default Toolbar;