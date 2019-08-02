import React, { Component } from 'react';

import axios from '../../axios-post';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './NewTrouble.css';
import { updateObject } from '../../shared/utility';
import Loading from '../../components/UI/Loading/Loading';

class NewTrouble extends Component {
    state = {
        controls: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ''
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                vaild: false
            },
            tag: {
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox'
                },
                dafaultValue: ['cowork', 'tech', 'life', 'culture'],
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            contents: {
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        },
        newPost: null,
        error: false,
        loading: false 
    }

    

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.controls[inputIdentifier],
            {
                value: event.target.value
            });
        const updatedForm = updateObject(this.state.controls,
            {
                [inputIdentifier]: updatedFormElement
            });
        this.setState({controls: updatedForm});
    }

    postHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});

        let formData = {};
        for ( let identifier in this.state.controls ) {
            formData[identifier] = this.state.controls[identifier].value;
        }


        // this test value data will be changed!
        formData.comments = {};
        formData.thumb = {value: null};

        axios.post('/post.json', formData)
            .then(res => {
                this.setState({loading: false});
            })
            .catch(err => {
                this.setState({error: true});
            });
    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map( element => (
            <Input
                key={element.id}
                elementType={element.config.elementType}
                elementconfig={element.config.elementConfig}
                configType={element.config.elementConfig.type}
                label={element.id}
                value={element.config.value}
                dafaultValue={element.config.dafaultValue}
                changed={(event) => this.inputChangeHandler(event, element.id)} />
        ));

        return (
            <div className={classes.NewTrouble}>

                <h3>Add New Trouble</h3>
                <form onSubmit={this.postHandler}>
                    {this.state.loading ? <Loading extraClass="modal"/> : null}
                    {form}
                    <Button
                        btnStyle="submit"
                        // click={this.postHandler}
                        style={{
                            display: "block",
                            margin: "0 auto"
                        }}>
                        Submit</Button>
                </form>

            </div>
        );
    }
}

export default NewTrouble;