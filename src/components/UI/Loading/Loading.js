import React from 'react';

import classes from './Loading.css';

const Loading = ( props ) => {
    return (
        <div className={[classes.Loading, classes[props.extraClass]].join(' ')}>
            <div className={classes.loadingBar}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        
    );
}

export default Loading;