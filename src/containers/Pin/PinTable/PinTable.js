import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './PinTable.css';
import Tag from '../../../components/UI/Tag/Tag';
import * as actions from '../../../store/actions/index';

class PinTable extends Component {
    // TAG MAPPING
    // console.log(props.tag);
    // let tags = props.tag.map( tag => {
    //     return (
    //         <Tag
    //             key={tag}
    //             tagType={tag}>{tag}</Tag>  
    //     );
    // });

    deletePinHandler = () => {
        this.props.onDeletePin(this.props.token, this.props.storedPinId);
    }

    render() {
        return (
            <div className={classes.PinTable}>
                <div>
                   <h4>{this.props.heading}</h4>
                   <Tag tagType={this.props.tag}>{this.props.tag}</Tag>
                    {// TAG MAPPING
                        /* <div>
                        {tags}
                    </div>  */}
                </div>
    
                <div className={classes.deleteBtn} onClick={this.deletePinHandler}>
                    <i className="material-icons">delete</i>
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
        onDeletePin: (token, pinId) => dispatch(actions.deletePin(token, pinId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinTable);