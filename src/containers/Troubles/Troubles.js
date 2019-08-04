import React, { Component } from 'react';
import { connect } from 'react-redux';

import Trouble from '../../components/Trouble/Trouble';
import classes from './Troubles.css';
import Button from  '../../components/UI/Button/Button';
import arrow_up from '../../assets/images/arrow_up.svg';
import add from '../../assets/images/add.svg';
import Loading from '../../components/UI/Loading/Loading';
import Modal from '../../components/UI/Modal/Modal';
import SeletedTrouble from '../../components/SeletedTrouble/SeletedTrouble';
import NewTrouble from '../NewTrouble/NewTrouble';
import * as actions from '../../store/actions/index';


class Troubles extends Component {
    state = {
        addPost: false,
        seleted: null
    }
    componentDidMount () {
        this.props.onFetchTroubles();
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

    moveToTopHandler = () => {
        window.scrollTo(0, 0);
    }

    render() {
        let troubles = <Loading />
        if (!this.props.loading) {
            troubles = this.props.trbs.map( trb => {
                return (
                    <Trouble
                    key={trb.id}
                    whole={trb}
                    heading={trb.title}
                    tag={trb.tag}
                    comments={trb.comments}
                    click={() => this.getselectedTroubleHandler(trb)} />
                );
            });
        }

        return (
            <div className={classes.Troubles}>
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

                <div className={classes.inbox}>
                    {troubles}
                </div>
                
               <div className={classes.floatBtnBox}>
                    <Button
                        btnStyle="circleBtn"
                        click={this.moveToTopHandler}><img src={arrow_up} alt="arrow" /></Button>
                    <Button
                        btnStyle="circleBtn"
                        click={this.addNewTroubleHandler}><img src={add} alt="add" /></Button>
               </div>
               
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        trbs: state.troubles.troubles,
        error: state.troubles.error,
        loading: state.troubles.loading,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTroubles: () => dispatch(actions.fetchTroubles()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Troubles);