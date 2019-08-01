import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    troubles: null,
    loading: true,
    error: false,
}

const setTroubles = (state, action) => {
    return updateObject(state, {
        troubles: action.troubles,
        loading: false
    });
}

const fetchTroublesFailed = (state, action) => {
    return updateObject(state, {
        error: true
    });
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.SET_TROUBLES: return setTroubles( state, action );
        case actionTypes.FETCH_TROUBLES_FAILED: return fetchTroublesFailed( state, action );
        default: return state;
    }
};

export default reducer;