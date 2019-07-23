import React from 'react';

import classes from './Input.css';

const Input = ( props ) => {
    let inputElement = null;

    switch(props.elementType) {
        case('input'):
            inputElement = <input
                {...props.elementConfig}
                className={classes.inputTag}
                value={props.value} />;
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );

}

export default Input;