import React, { Component } from 'react';
import axios from 'axios';

import PinRow from './PinRow/PinRow';
import Loading from '../../../components/UI/Loading/Loading';

class PinTable extends Component {
    state = {
        pins: [],
        loading: true,
        error: false
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const pinData = res.data.slice(20, 26);
                const updatePin = pinData.map( pin => {
                    return {
                        ...pin,
                        tag: "cowork"
                    };
                });
                this.setState({pin: updatePin, loading: false});
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
                    <PinRow
                        key={pin.id}
                        heading={pin.title}
                        tag={pin.tag} />
                );
            });
        }

        return(
            <div>
                {pin}
            </div>
        );
    }
}

export default PinTable;