import React from 'react';

import classes from './SeletedTrouble.css';
import Tag from '../UI/Tag/Tag';
import thumb from '../../assets/images/thumb.svg';
import pin from '../../assets/images/pin.svg';
import share from '../../assets/images/share.svg';
import comment from '../../assets/images/comment.svg';
import Input from '../UI/Input/Input';

const SeletedTrouble = ( props ) => {
    return (
        <div className={classes.SeletedTrouble}>
            <article>
                <h2>{props.heading}</h2>
                <Tag tagType="cowork">{props.tag}</Tag>
                <p>{props.contents}</p>
            </article>

            <section>


                <Input
                    elementType="textarea"
                    elementconfig="type: text"
                    label="add comment"
                    value=""
                    height="calc((1.5em + .75rem + 2px) * 1)"
                    // changed={(event) => this.inputChangeHandler(event, element.id)}
                    />
            </section>

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