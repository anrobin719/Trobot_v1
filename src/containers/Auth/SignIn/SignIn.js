import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import classes from './SignIn.css';
import { updateObject, checkValidity } from '../../../shared/utility'
import * as actions from '../../../store/actions/index';
import Loading from '../../../components/UI/Loading/Loading';


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
        },
        isSignup: false
    }

    componentDidMount () {
        if ( this.props.authRedirectPath !== '/' ) {
            this.props.onSetAuthRedirectPath();
        } 
    }

    inputChangedHandler = (event, controlName) => {
        const updateControls = updateObject( this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        })
        this.setState({controls: updateControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    changeAuthToSignUpHandler = () => {
        this.setState({isSignup: true});
    }

    changeAuthToSignInHandler = () => {
        this.setState({isSignup: false});
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

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error.response.data.error.message}</p>
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            <div className={classes.SignIn}>
                {authRedirect}

                <div className={classes.inbox}>

                    <div className={classes.signBox}>
                        <h2>Get started with Trobot!</h2>
                            {errorMessage}
                            <form onSubmit={this.submitHandler}>
                                {form}
                                <div className={classes.btnBox}>
                                    <Button
                                        btnStyle="submit"
                                        btnType="submit"
                                        click={this.changeAuthToSignInHandler}>Sign in</Button>
                                    <Button
                                        btnStyle="submitBorder"
                                        btnType="submit"
                                        click={this.changeAuthToSignUpHandler}>Join</Button>
                                </div>
                            </form>

                    { this.props.loading ? <Loading extraClass="modal"/> : null}
                    </div>
                    
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);