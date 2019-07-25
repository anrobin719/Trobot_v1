import React from 'react';

import classes from './SeletedTrouble.css';
import Tag from '../UI/Tag/Tag';
import thumb from '../../assets/images/thumb.svg';
import pin from '../../assets/images/pin.svg';
import share from '../../assets/images/share.svg';
import comment from '../../assets/images/comment.svg';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

const SeletedTrouble = ( props ) => {

    const addCommentHandler = () => {

    }
    
    const commentsArray = [];
    for ( let commentId in props.comments) {
        commentsArray.push ({
            id: commentId,
            comment: props.comments[commentId]
        });
    }

    let comments = commentsArray.map( comment => {
        return (
            <div
                key={comment.id}
                className={classes.comment}>
                <div>{comment.id}</div>
                <div>{comment.comment}</div>
            </div>
        );
    });

    return (
        <div className={classes.SeletedTrouble}>
            <article>
                <h2>{props.heading}</h2>
                <Tag tagType="cowork">{props.tag}</Tag>
                <p>{props.contents}</p>
            </article>

            <section>
                <div>
                    {comments}
                </div>
                <div className={classes.addComment}>
                    <form onSubmit={addCommentHandler}>
                        <Input
                            elementType="input"
                            elementconfig="type: text"
                            value=""
                            style={{
                                height: '36px',
                                width: 'calc(100% - 100px)',
                                float: 'left',
                                textAlign: 'left'
                            }}
                            // changed={(event) => this.inputChangeHandler(event, element.id)}
                            />
                        <Button btnType="submit">add</Button>
                    </form>
                </div>
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