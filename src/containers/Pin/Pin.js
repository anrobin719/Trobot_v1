import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from './Pin.css';
import PinTable from './PinTable/PinTable';
import Loading from '../../components/UI/Loading/Loading';

class Pin extends Component {

    componentDidMount () {
        this.props.onFetchPins(this.props.token, this.props.userId);
    }

    render() {
        let pin = <Loading />
        
        if(!this.props.loading) {
            const pins = this.props.pins;
            console.log(pins);
            pin = pins.map( pin => {
                return (
                    <PinTable
                        key={pin.trb.id}
                        heading={pin.trb.title}
                        tag={pin.trb.tag}
                        storedPinId={pin.storedPinId} />
                );
            });
        }
        console.log(this.props);

        return (
            <div className={classes.Pin}>
                <div className={classes.inbox}>

                    <section className={classes.profile}>
                        <div></div>
                        <blockquote>
                            <h4>Robin An</h4>
                            <p>{this.props.email}</p>
                        </blockquote>
                    </section>

                    <section className={classes.table}>
                        {pin}
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.pin.loading,
        pins: state.pin.pins,
        email: state.auth.email,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPins: (token, id) => dispatch(actions.fetchPins(token, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pin);