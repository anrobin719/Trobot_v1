import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/about">About us</NavigationItem>
        <NavigationItem
            link="/pin">My Pin</NavigationItem>
        <NavigationItem
            link="/signIn">Sign in</NavigationItem>
    </ul>
);

export default NavigationItems;