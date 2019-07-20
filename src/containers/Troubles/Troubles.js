import React, { Component } from 'react';

import axios from 'axios';
import Trouble from '../../components/Trouble/Trouble';

class Troubles extends Component {
    state = {
        troubles: [],
        error: false
    }
    
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const troubles = res.data.slice(0, 10);
                const updateTrouble = troubles.map( trb => {
                    return {
                        ...trb,
                        tag: "cowork"
                    };
                });
                this.setState({troubles: updateTrouble});
            })
            .catch(err => {
                this.setState({error: true});
            })
    }

    render() {
        console.log(this.state);
        let troubles = this.state.troubles.map( trb => {
            return (
                <Trouble
                key={trb.id}
                heading={trb.title}
                tag={trb.tag} />
            );
        });

        return (
            <div>
               {troubles} 
            </div>
            
        );
    }
}

export default Troubles;