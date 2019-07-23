import React from 'react';

const PinRow = ( props ) => {
    return (
        <div>
            <div>{props.heading}</div>
            <div>{props.tag}</div>
        </div>
    );
}

export default PinRow;