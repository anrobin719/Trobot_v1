import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './TroubleFooter.css'
import * as actions from '../../../store/actions/index';

class TroubleFooter extends Component {
    state = {
        isPinClicked: false,
        isThumbClicked: false
    }
    // props.trbId = post id
    thumbBtnHandler = () => {
        console.log('thumb button click');
        this.setState( prevState => {
            return {
                isThumbClicked: !prevState.isThumbClicked
            };
        });
    };

    storePinHandler = () => {
        this.setState( prevState => {
            return {
                isPinClicked: !prevState.isPinClicked
            };
        });
        
        console.log(this.props.trb);
        if(!this.state.isPinClicked) {
            const pinData = {
                trb: this.props.trb,
                userId: this.props.userId
            }
            this.props.onStorePin(this.props.token, pinData);
        } else {
            this.props.onDeletePin(this.props.token, this.props.storedPinId);
        }
        

    };

    shareBtnHandler = () => {
        console.log('share button click');
    };

    render() {
        const commentsArray = [];
        for (let comment in this.props.comments) {
            commentsArray.push(comment);
        }
        // this should not be updated!
        // console.log(commentsArray);
        const commentsLength = commentsArray.length;

        const pinClass = [];
        if(this.state.isPinClicked) {
            pinClass.push(classes.btnActive);
        } else {
            pinClass.pop();
        }
        console.log(pinClass);
        
        const thumbClass = [];
        if(this.state.isThumbClicked) {
            thumbClass.push(classes.btnActive);
        } else {
            thumbClass.pop();
        }
        console.log(thumbClass);
        
        // console.log(this.state.isPinClicked);
    
        return(
            <div className={classes.footer} style={this.props.style}>
                    <div
                        onClick={this.thumbBtnHandler}
                        className={thumbClass.join(' ')}>
                        <i className="material-icons">thumb_up</i>Thumb
                    </div>
                    <div
                        onClick={this.storePinHandler}
                        className={pinClass.join(' ')}>
                        <i className="material-icons">input</i>Pin
                    </div>
                    <div
                        onClick={this.shareBtnHandler}>
                        <i className="material-icons">share</i>Share
                    </div>
                    <div
                        style={{cursor: 'auto'}}>
                        <i className="material-icons">mode_comment</i>{commentsLength}
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStorePin: (token, pinData) => dispatch(actions.storePin(token, pinData)),
        onDeletePin: (token, pinId) => dispatch(actions.deletePin(token, pinId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TroubleFooter);