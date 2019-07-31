import React from 'react';

import classes from './Input.css';

const Input = ( props ) => {
    let inputElement = null;
    const inputClasses = [];

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }


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
                                    onChange={props.changed}
                                    style={props.style} />
                                <span>{val}</span>
                            </div>
                            
                    );
                });
                    break;
                case('text'):
                case('email'):
                case('password'):
                    inputElement = <input
                        {...props.elementConfig}
                        className={[classes.inputTag].concat(inputClasses).join(' ')}
                        value={props.value}
                        onChange={props.changed}
                        style={props.style}
                         />;
                    break;
                default:
                    inputElement = <input
                        {...props.elementConfig}
                        className={[classes.inputTag].concat(inputClasses).join(' ')}
                        value={props.value}
                        onChange={props.changed}
                        style={props.style} />;
            }
            break;

        case('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                className={[classes.textareaTag].concat(inputClasses).join(' ')}
                onChange={props.changed}
                style={props.style}
             />;
             break;

        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                style={props.style}/>;
    }

    return (
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );

}

export default Input;