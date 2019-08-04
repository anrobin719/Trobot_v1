import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

export const storePinStart = () => {
    return {
        type: actionTypes.STORE_PIN_START
    };
};

export const storePinSuccess = () => {
    return {
        type: actionTypes.STORE_PIN_SUCCESS
    };
};

export const storePinFail = () => {
    return {
        type: actionTypes.STORE_PIN_FAIL
    };
};

export const storePin = ( token, data ) => {
    return dispatch => {
        dispatch( storePinStart() );

        axios.post('/pinData.json?auth=' + token, data)
            .then( res => {
                console.log(res.trb);
                dispatch( storePinSuccess(res) );
            })
            .catch( err => {
                dispatch ( storePinFail(err) );
            });
    };
};

export const fetchPinStart = () => {
    return {
        type: actionTypes.FETCH_PIN_START
    }
};

export const fetchPinSuccess = ( res ) => {
    return {
        type: actionTypes.FETCH_PIN_SUCCESS,
        data: res
    }
};

export const fetchPinFail = ( err ) => {
    return {
        type: actionTypes.FETCH_PIN_FAIL,
        error: err
    }
};

export const fetchPins = (token, id) => {
    return dispatch => {
        dispatch( fetchPinStart() );

        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + id + '"';
        axios.get('/pinData.json' + queryParams)
            .then(res => {
                console.log(res);
                dispatch( fetchPinSuccess(res) );
            })
            .catch(err => {
                dispatch( fetchPinFail(err) );
            });
    }
}