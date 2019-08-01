import React from 'react';

import classes from './TroubleFooter.css'
import thumb from '../../../assets/images/thumb.svg';
import pin from '../../../assets/images/pin.svg';
import share from '../../../assets/images/share.svg';
import comment from '../../../assets/images/comment.svg';

const TroubleFooter = ( props ) => {
    return(
        <div className={classes.footer} style={props.style}>
                <div><img src={thumb} alt="thumb" />Thumb</div>
                <div><img src={pin} alt="pin" />Pin</div>
                <div><img src={share} alt="share" />Share</div>
                <div><img src={comment} alt="comment" />2</div>
        </div>
    );
}

export default TroubleFooter;