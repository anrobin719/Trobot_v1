import React, { Component } from 'react';

import axios from 'axios';
import Trouble from '../../components/Trouble/Trouble';
import classes from './Troubles.css';
import Button from  '../../components/UI/Button/Button';
import arrow_up from '../../assets/images/arrow_up.svg';
import add from '../../assets/images/add.svg';
import Loading from '../../components/UI/Loading/Loading';
import Modal from '../../components/UI/Modal/Modal';
import SeletedTrouble from '../../components/SeletedTrouble/SeletedTrouble';

class Troubles extends Component {
    state = {
        troubles: [],
        loading: true,
        error: false,
        addPost: false,
        seleted: null
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

    addNewTroubleHandler = () => {
        this.setState({
            addPost: true
        });
    }

    cancelNewTroubleHandler = () => {
        this.setState({
            addPost: false,
        });
    }

    getselectedTroubleHandler = (trb) => {
        this.setState({
            seleted: trb
        });
    }
    
    closeselectedTroubleHandler = () => {
        this.setState({
            seleted: null
        });
    }

    render() {
        let troubles = <Loading />
        if (!this.state.loading) {
            troubles = this.state.troubles.map( trb => {
                return (
                    <Trouble
                    key={trb.id}
                    heading={trb.title}
                    tag={trb.tag}
                    click={() => this.getselectedTroubleHandler(trb)} />
                );
            });
        }

        // let selectedTrouble = null
        // if(this.state.seleted) {
        //     selectedTrouble = (
        //         <Modal show={this.state.seleted} click={this.closeselectedTroubleHandler}>
        //             <SeletedTrouble
        //                     heading={this.state.seleted.title}
        //                     tag={this.state.seleted.tag}
        //                     contents={this.state.seleted.body} />
        //         </Modal>
        //     );
        // }

        console.log(this.state.seleted);
        return (
            <div className={classes.Troubles}>
                <div className={classes.inbox}>
                    <Modal show={this.state.addPost} click={this.cancelNewTroubleHandler}>
                        {/* NEW POSTING FORM */}
                    </Modal>
                    
                    {this.state.seleted ? (
                        <Modal show={this.state.seleted} click={this.closeselectedTroubleHandler}>
                            <SeletedTrouble
                                    heading={this.state.seleted.title}
                                    tag={this.state.seleted.tag}
                                    contents={this.state.seleted.body} />
                        </Modal>
                    )
                    : null}

                    {troubles}
                </div>

               <div className={classes.floatBtnBox}>
                    <Button
                        btnType="circleBtn"><img src={arrow_up} alt="arrow" /></Button>
                    <Button
                        btnType="circleBtn"
                        click={this.addNewTroubleHandler}><img src={add} alt="add" /></Button>
               </div>
               
            </div>
        );
    }
}

export default Troubles;