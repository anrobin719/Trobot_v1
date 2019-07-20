import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Pin</NavigationItem>
        <NavigationItem>Sign in</NavigationItem>
    </ul>
);

export default NavigationItems;