import React, { Component } from 'react';
import axios from '../../axios-post';

import classes from './SeletedTrouble.css';
import Tag from '../UI/Tag/Tag';
import TroubleFooter from '../Trouble/TroubleFooter/TroubleFooter';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { updateObject } from '../../shared/utility';
import Loading from '../UI/Loading/Loading';

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

        const updatedComments = updateObject(this.props.whole, {
            comments: updateObject(this.props.whole.comments, {
                // 'robin' have to be replaced with userID
                uptohai: this.state.controls.comments.value
            })
        });

        const clearInputValue = updateObject(this.state.controls, {
            comments: updateObject(this.state.controls.comments, {
                value: ''
            })
        });

        axios.put('/post/' + this.props.id + '.json', updatedComments)
        .then(res => {
            this.setState({loading: false, controls: clearInputValue});
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
                    <TroubleFooter style={{
                        width: '100%',
                        top: 0,
                        left: 0
                    }}/>
               
                    <section>
                        <div className={classes.addComment}>
                            <form onSubmit={this.addCommentHandler}>
                                {input}
                                <Button
                                    btnStyle="submit"
                                    style= {{
                                        position: 'absolute',
                                        top: 0,
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
                    {this.state.loading ? <Loading extraClass="modal"/> : null}
                </footer>
            </div>
        );
    }
}

export default SeletedTrouble;