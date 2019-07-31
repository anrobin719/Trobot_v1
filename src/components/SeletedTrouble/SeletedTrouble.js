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


            <footer className={classes.footer}>
                <div><img src={thumb} alt="thumb" />Thumb</div>
                <div><img src={pin} alt="pin" />Pin</div>
                <div><img src={share} alt="share" />Share</div>
                <div><img src={comment} alt="comment" />2</div>
           
                <section>
                    <div className={classes.addComment}>
                        <form onSubmit={addCommentHandler}>
                            <Input
                                elementType="input"
                                elementconfig="type: text"
                                value=""
                                style={{
                                    height: '34px',
                                    width: 'calc(100%)',
                                    float: 'left',
                                    textAlign: 'left'
                                }}
                                // changed={(event) => this.inputChangeHandler(event, element.id)}
                                />
                            <Button
                                btnType="submit"
                                style= {{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    margin: '0 0 0 8px'
                                }}>add</Button>
                        </form>
                    </div>
                    <div className={classes.commentBox}>
                        {comments}
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default SeletedTrouble;