import axios from '../../axios-post';
import * as actionTypes from './actionTypes';

export const setTroubles = ( troubles ) => {
    const fetchedTroubles = [];
        for(let trb in troubles) {
            fetchedTroubles.push({
                ...troubles[trb],
                id: trb
            });
        };
    return {
        type: actionTypes.SET_TROUBLES,
        troubles: fetchedTroubles
    };
}

export const fetchTroublesFailed = () => {
    return {
        type: actionTypes.FETCH_TROUBLES_FAILED
    };
}

export const fetchTroubles = () => {
    return dispatch => {
        axios.get('/post.json')
            .then(res => {
                dispatch(setTroubles(res.data));
            })
            .catch(err => {
                dispatch(fetchTroublesFailed());
            });
    }
};