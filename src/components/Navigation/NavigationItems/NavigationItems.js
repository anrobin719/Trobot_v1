import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/about" exact>About us</NavigationItem>
        { props.isAuthenticated ? <NavigationItem link="/pin">My Pin</NavigationItem> : null}
        { !props.isAuthenticated
            ? <NavigationItem link="/signIn">Sign in</NavigationItem>
            : <NavigationItem link="/signOut">Sign out</NavigationItem>}
    </ul>
);

export default NavigationItems;