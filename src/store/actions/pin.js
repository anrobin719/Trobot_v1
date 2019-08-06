import * as actionTypes from './actionTypes';
import axios from '../../axios-post';

export const storePinStart = () => {
    return {
        type: actionTypes.STORE_PIN_START
    };
};

export const storePinSuccess = (id, pinData) => {
    return {
        type: actionTypes.STORE_PIN_SUCCESS,
        pinId: id,
        pinData: pinData
    };
};

export const storePinFail = () => {
    return {
        type: actionTypes.STORE_PIN_FAIL
    };
};

export const storePin = ( token, pinData ) => {
    return dispatch => {
        dispatch( storePinStart() );

        axios.post('/pinData.json?auth=' + token, pinData)
            .then( res => {
                console.log(pinData);
                dispatch( storePinSuccess(pinData.userId, pinData) );
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

export const fetchPinSuccess = ( pins ) => {
    return {
        type: actionTypes.FETCH_PIN_SUCCESS,
        data: pins
    }
};

export const fetchPinFail = ( err ) => {
    return {
        type: actionTypes.FETCH_PIN_FAIL,
        error: err
    }
};

export const fetchPins = (token, userId) => {
    return dispatch => {
        dispatch( fetchPinStart() );

        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/pinData.json' + queryParams)
            .then(res => {
                console.log(res);
                const fetchPinsArray = [];
                for(let key in res.data) {
                    fetchPinsArray.push( {
                        ...res.data[key],
                        pinId: key
                    });
                }
                dispatch( fetchPinSuccess(fetchPinsArray) );
            })
            .catch(err => {
                dispatch( fetchPinFail(err) );
            });
    }
}