import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from  '../Backdrop/Backdrop';

const Modal = ( props ) => {
    return (
        props.show ? (
            <Aux>
                <Backdrop show={props.show} click={props.click}/>
                <div
                    className={classes.Modal}
                    style={{
                        opacity: props.show ? '1' : '0',
                        transform: props.show ? 'translateY(-50%)' : 'translateY(-20vh)' 
                    }}>
                        {props.children}
                </div>
            </Aux>
        ) : null
    );
}

export default Modal;