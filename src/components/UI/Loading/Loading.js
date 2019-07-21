import React from 'react';

import classes from './Loading.css';

const Loading = () => {
    return (
        <div className={classes.Loading}>
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