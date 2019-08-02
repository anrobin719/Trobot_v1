import React from 'react';

import classes from './Button.css';

const Button = ( props ) => (
    <button
        className={[classes.Button, classes[props.btnStyle]].join(' ')}
        style={props.style}
        type={props.btnType}
        onClick={props.click}>{props.children}</button>
);

export default Button;