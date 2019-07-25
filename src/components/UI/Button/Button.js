import React from 'react';

import classes from './Button.css';

const Button = ( props ) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        style={props.style}
        onClick={props.click}>{props.children}</button>
);

export default Button;