import React, { Component } from 'react';

import axios from '../../axios-post';
import Trouble from '../../components/Trouble/Trouble';
import classes from './Troubles.css';
import Button from  '../../components/UI/Button/Button';
import arrow_up from '../../assets/images/arrow_up.svg';
import add from '../../assets/images/add.svg';
import Loading from '../../components/UI/Loading/Loading';
import Modal from '../../components/UI/Modal/Modal';
import SeletedTrouble from '../../components/SeletedTrouble/SeletedTrouble';
import NewTrouble from '../NewTrouble/NewTrouble';

class Troubles extends Component {
    state = {
        troubles: null,
        loading: true,
        error: false,
        addPost: false,
        seleted: null
    }
    
    componentDidMount () {
        axios.get('/post.json')
            .then(res => {
                console.log(res.data);
                const fetchedTroubles = [];
                for(let trb in res.data) {
                    fetchedTroubles.push({
                        ...res.data[trb],
                        id: trb
                    });
                };
                this.setState({troubles: fetchedTroubles, loading: false});
                console.log(this.state.troubles);
            })
            .catch(err => {
                this.setState({error: true});
            });
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

        console.log(this.state.seleted);

        return (
            <div className={classes.Troubles}>
                <div className={classes.inbox}>
                    <Modal show={this.state.addPost} click={this.cancelNewTroubleHandler}>
                        <NewTrouble show={this.state.addPost}/>
                    </Modal>
                    
                    {this.state.seleted ? (
                        <Modal show={this.state.seleted} click={this.closeselectedTroubleHandler}>
                            <SeletedTrouble
                                    whole={this.state.seleted}
                                    id={this.state.seleted.id}
                                    heading={this.state.seleted.title}
                                    tag={this.state.seleted.tag}
                                    contents={this.state.seleted.contents}
                                    comments={this.state.seleted.comments} />
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