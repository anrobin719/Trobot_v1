import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from  '../Backdrop/Backdrop';

const Modal = ( props ) => {
    return (
        <Aux>
            <Backdrop show={props.show} click={props.click}/>
            <div
                className={classes.Modal}
                style={{
                    opacity: props.show ? '1' : '0'
                }}>
                    {props.children}
            </div>
        </Aux>
    );
}

export default Modal;