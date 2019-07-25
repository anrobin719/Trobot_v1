import React from 'react';

import classes from './Input.css';

const Input = ( props ) => {
    let inputElement = null;

    switch(props.elementType) {
        case('input'): 
            switch(props.configType) {
                case('checkbox'):
                    inputElement = props.dafaultValue.map( val => {
                        return (
                            <div key={val} className={classes.checkboxTag}>
                                <input
                                    type="checkbox"
                                    value={val}
                                    onChange={props.changed} />
                                <span>{val}</span>
                            </div>
                            
                    );
                });
                    break;
                case('text', 'email', 'password'):
                    inputElement = <input
                        {...props.elementConfig}
                        className={classes.inputTag}
                        value={props.value}
                        onChange={props.changed}
                         />;
                    break;
                default:
                    inputElement = <input
                        {...props.elementConfig}
                        className={classes.inputTag}
                        value={props.value}
                        onChange={props.changed} />;
            }
            break;

        case('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                className={classes.textareaTag}
                onChange={props.changed}
                style={{'height': props.height}}
             />;
             break;

        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );

}

export default Input;