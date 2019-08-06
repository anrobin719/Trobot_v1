import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import classes from './Pin.css';
import PinTable from './PinTable/PinTable';
import Loading from '../../components/UI/Loading/Loading';

class Pin extends Component {

    componentDidMount () {
        this.props.onFetchPins(this.props.token, this.props.id);
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
                        tag={pin.trb.tag} />
                );
            });
        }

        return (
            <div className={classes.Pin}>
                <div className={classes.inbox}>

                    <section className={classes.profile}>
                        <div></div>
                        <blockquote>
                            <h4>Robin An</h4>
                            <p>anrobin719@gmail.com</p>
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
        token: state.auth.token,
        id: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPins: (token, id) => dispatch(actions.fetchPins(token, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pin);