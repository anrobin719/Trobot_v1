import React from 'react';

import classes from './SeletedTrouble.css';
import Tag from '../UI/Tag/Tag';
import thumb from '../../assets/images/thumb.svg';
import pin from '../../assets/images/pin.svg';
import share from '../../assets/images/share.svg';
import comment from '../../assets/images/comment.svg';

const SeletedTrouble = ( props ) => {
    return (
        <div className={classes.SeletedTrouble}>
            <article>
                <h2>{props.heading}</h2>
                <Tag tagType="cowork">{props.tag}</Tag>
                <p>{props.contents}</p>
            </article>

            <footer className={classes.footer}>
                <div><img src={thumb} alt="thumb" />Thumb</div>
                <div><img src={pin} alt="pin" />Pin</div>
                <div><img src={share} alt="share" />Share</div>
                <div><img src={comment} alt="comment" />2</div>
            </footer>
        </div>
    );
}

export default SeletedTrouble;