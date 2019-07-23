import React, { Component } from 'react';

import axios from 'axios';
import Trouble from '../../components/Trouble/Trouble';
import classes from './Troubles.css';
import Button from  '../../components/UI/Button/Button';
import arrow_up from '../../assets/images/arrow_up.svg';
import add from '../../assets/images/add.svg';
import Loading from '../../components/UI/Loading/Loading';

class Troubles extends Component {
    state = {
        troubles: [],
        loading: true,
        error: false
    }
    
    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const troubles = res.data.slice(0, 20);
                const updateTrouble = troubles.map( trb => {
                    return {
                        ...trb,
                        tag: "cowork"
                    };
                });
                this.setState({troubles: updateTrouble, loading: false});
            })
            .catch(err => {
                this.setState({error: true});
            })
    }

    render() {
        let troubles = <Loading />
        
        if (!this.state.loading) {
            troubles = this.state.troubles.map( trb => {
                return (
                    <Trouble
                    key={trb.id}
                    heading={trb.title}
                    tag={trb.tag} />
                );
            });
        }
        
        return (
            <div className={classes.Troubles}>
                {/* <aside>
                    <ul>
                        <li>Side bar</li>
                        <li>Some data</li>
                        <li>data</li>
                    </ul>
                </aside> */}
                <div className={classes.inbox}>
                    {troubles}
                </div>

               <div className={classes.floatBtnBox}>
                    <Button
                        btnType="circleBtn"><img src={arrow_up} alt="arrow" /></Button>
                    <Button
                        btnType="circleBtn"><img src={add} alt="add" /></Button>
               </div>
               
            </div>
        );
    }
}

export default Troubles;