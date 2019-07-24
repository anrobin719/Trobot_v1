import React, { Component } from 'react';
import axios from 'axios';

import classes from './Pin.css';
import PinTable from './PinTable/PinTable';
import Loading from '../../components/UI/Loading/Loading';

class Pin extends Component {
    state = {
        pins: [],
        loading: true,
        error: false
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const pinData = res.data.slice(20, 25);
                const updatePin = pinData.map( pin => {
                    return {
                        ...pin,
                        tag: ["cowork", "tech"]
                    };
                });
                this.setState({pins: updatePin, loading: false});
            })
            .catch(err => {
                this.setState({error: true});
            });
    }

    render() {
        let pin = <Loading />
        
        if(!this.state.loading) {
            pin = this.state.pins.map( pin => {
                return (
                    <PinTable
                        key={pin.id}
                        heading={pin.title}
                        tag={pin.tag} />
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

export default Pin;