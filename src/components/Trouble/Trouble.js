import React from 'react';

import classes from './Trouble.css';
import Tag from '../UI/Tag/Tag';
import TroubleFooter from './TroubleFooter/TroubleFooter';

const Trouble = ( props ) => {


    return (
        <div className={classes.Trouble}>
            <article onClick={props.click}>
                <h2>{props.heading}</h2>
                <Tag tagType={props.tag}>{props.tag}</Tag>
            </article>

            <TroubleFooter />
            
        </div>
    );
}

export default Trouble;