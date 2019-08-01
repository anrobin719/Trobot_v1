import React, { Component } from 'react';
import axios from '../../axios-post';

import classes from './SeletedTrouble.css';
import Tag from '../UI/Tag/Tag';
import thumb from '../../assets/images/thumb.svg';
import pin from '../../assets/images/pin.svg';
import share from '../../assets/images/share.svg';
import commentImg from '../../assets/images/comment.svg';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { updateObject } from '../../shared/utility';

class SeletedTrouble extends Component {
    state = {
        controls: {
            comments: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ''
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                vaild: false
            }
        },
        error: false,
        loading: false 
    }

    inputChangeHandler = ( event, elId ) => {
        const updatedFormElement = updateObject(this.state.controls[elId], {
            value: event.target.value
        });

        const updatedForm = updateObject(this.state.controls, {
            [elId]: updatedFormElement
        });

        this.setState({controls: updatedForm});
    }

    addCommentHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});

        console.log(this.props.whole);

        const updatedComments = updateObject(this.props.whole, {
            comments: updateObject(this.props.whole.comment, {
                ...this.props.whole.comments,
                // 'robin' have to be replaced with userID
                robin: this.state.controls.comments.value
            })
        });

        axios.put('/post/' + this.props.id + '.json', updatedComments)
        .then(res => {
            console.log(res);
            this.setState({loading: false});
        })
        .catch(err => this.setState({error: true}));
    }
    
    render() {
        const commentsArray = [];
        for ( let commentId in this.props.comments) {
            commentsArray.push ({
                id: commentId,
                comment: this.props.comments[commentId]
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

        const formArray = [];
        for ( let comment in this.state.controls) {
            formArray.push({
                id: comment,
                config: this.state.controls[comment]
            });
        }
    
        let input = formArray.map( el => {
            return(
                <Input
                    key={el.id}
                    elementType={el.config.elementType}
                    elementconfig={el.config.elementConfig}
                    configType={el.config.elementConfig.type}
                    label={el.id}
                    value={el.config.value}
                    dafaultValue={el.config.dafaultValue}
                    changed={(event) => this.inputChangeHandler(event, el.id)}
                    style={{
                        height: '34px',
                        width: 'calc(100%)',
                        float: 'left',
                        textAlign: 'left'
                    }} />
            );
        });

        return (
            <div className={classes.SeletedTrouble}>
                <article>
                    <h2>{this.props.heading}</h2>
                    <Tag tagType={this.props.tag}>{this.props.tag}</Tag>
                    <p>{this.props.contents}</p>
                </article>
    
    
                <footer className={classes.footer}>
                    <div><img src={thumb} alt="thumb" />Thumb</div>
                    <div><img src={pin} alt="pin" />Pin</div>
                    <div><img src={share} alt="share" />Share</div>
                    <div><img src={commentImg} alt="comment" />2</div>
               
                    <section>
                        <div className={classes.addComment}>
                            <form onSubmit={this.addCommentHandler}>
                                {input}
                                <Button
                                    btnType="submit"
                                    style= {{
                                        position: 'absolute',
                                        bottom: '-100%',
                                        transform: 'translateY(50%)',
                                        right: 0,
                                        margin: 0,
                                        borderRadius: '0 .25rem .25rem 0'
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
}

export default SeletedTrouble;