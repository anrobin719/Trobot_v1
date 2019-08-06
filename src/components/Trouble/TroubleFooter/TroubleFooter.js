import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './TroubleFooter.css'
import thumb from '../../../assets/images/thumb.svg';
import pin from '../../../assets/images/pin.svg';
import share from '../../../assets/images/share.svg';
import commentImg from '../../../assets/images/comment.svg';
import * as actions from '../../../store/actions/index';

class TroubleFooter extends Component {
    // props.trbId = post id
    switchActiveButtonHandler = () => {
        console.log('thumb button click');
    };

    storePinHandler = () => {

        const pinData = {
            trb: this.props.trb,
            userId: this.props.userId
        }
        console.log(pinData);
        this.props.onStorePin(this.props.token, pinData);
    };

    shareButtonHandler = () => {
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
    
        let activeStyle = null;
    
        return(
            <div className={classes.footer} style={this.props.style}>
                    <div
                        onClick={this.switchActiveButtonHandler}
                        style={activeStyle}>
                        <img src={thumb} alt="thumb" />Thumb
                    </div>
                    <div
                        onClick={this.storePinHandler}>
                        <img
                            src={pin} alt="pin" />Pin
                    </div>
                    <div
                        onClick={this.shareButtonHandler}>
                        <img src={share} alt="share" />Share
                    </div>
                    <div
                        style={{cursor: 'auto'}}>
                        <img src={commentImg} alt="comment" />{commentsLength}
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
        onStorePin: (token, pinData) => dispatch(actions.storePin(token, pinData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TroubleFooter);