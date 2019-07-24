import React from 'react';

import classes from './Tag.css';

const Tag = ( props ) => {
    return (
        <span className={[classes.Tag, classes[props.tagType]].join(' ')}>{props.children}</span>
    );
}

export default Tag;