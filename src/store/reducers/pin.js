import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    pins: [],
    loading: true,
    error: false
};

const storePinStart = (state, action) => {
    return {

    };
};

const storePinSuccess = (state, action) => {
    return {

    };
};

const storePinFail = (state, action) => {
    return {

    };
};

const fetchPinStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const fetchPinSuccess = (state, action) => {
    return updateObject(state, {
        pins: action.data,
        loading: false
    });
};

const fetchPinFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_PIN_START: return storePinStart(state, action);
        case actionTypes.STORE_PIN_SUCCESS: return storePinSuccess(state, action);
        case actionTypes.STORE_PIN_FAIL: return storePinFail(state, action);
        case actionTypes.FETCH_PIN_START: return fetchPinStart(state, action);
        case actionTypes.FETCH_PIN_SUCCESS: return fetchPinSuccess(state, action);
        case actionTypes.FETCH_PIN_FAIL: return fetchPinFail(state, action);
        default: return state;
    }
}

export default reducer;