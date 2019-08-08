import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, id, email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: id,
        email: email
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};


export const auth = ( email, password, isSignup ) => {
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD06IewZiniZT4xSs4lT0dcfCv7gBXPIZ0';
        if(!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD06IewZiniZT4xSs4lT0dcfCv7gBXPIZ0'
        }
        axios.post(url, authData)
        .then( res => {
            console.log(res);
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('userId', res.data.localId);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('email', res.data.email);
            dispatch(authSuccess(res.data.idToken, res.data.localId, res.data.email));
            dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch(err => {
            console.log(err.response.data.error.message);
            dispatch(authFail(err));
        });

    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(new Date() >= expirationDate) {
                dispatch(logout());
            } else {
                const email = localStorage.getItem('email');
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId, email));
                dispatch(checkAuthTimeout( ( expirationDate.getTime() - new Date().getTime() ) / 1000 ));
            }
        }
    }
}