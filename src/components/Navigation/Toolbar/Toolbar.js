import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => (
    <header className={classes.Toolbar}>
        <DrawerToggle />
        <h1>Trobot 🤖</h1>

        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;