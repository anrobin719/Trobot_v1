import React from 'react';

import classes from './Trouble.css';

const Trouble = ( props ) => {
    return (
        <article className={classes.Trouble}>
            <h2>{props.heading}</h2>
            <p className={classes.tag}>{props.tag}</p>
        </article>
    );
}

export default Trouble;