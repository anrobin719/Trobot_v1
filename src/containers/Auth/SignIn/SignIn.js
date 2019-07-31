import React, { Component } from 'react';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './SignIn.css';
import { updateObject, checkValidity } from '../../../shared/utility'


class SignIn extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'example@google.com'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                vaild: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        }
    }

    inputChangedHandler (event, controlName) {
        const updateControls = updateObject( this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        })
        this.setState({controls: updateControls});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                label={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                configType={formElement.config.elementConfig.type}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler( event, formElement.id )} />            
        ));

        return (
            <div className={classes.SignIn}>

                <div className={classes.inbox}>

                    <div className={classes.signBox}>
                    <h2>Get started with Trobot!</h2>
                        <form>
                            {form}
                            <div className={classes.btnBox}>
                                <Button
                                    btnType="submit">Sign in</Button>
                                <Button
                                    btnType="submitBorder">Join</Button>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default SignIn;