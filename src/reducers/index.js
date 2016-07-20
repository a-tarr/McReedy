/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/actions.js';

const initialState = {  
    data: {},
    isFetching: false
};

export function data (state = initialState, action) {  
    switch (action.type) {
	    case DATA_FETCH_BEGIN: {
	        return { ...state, isFetching: true };
	    }
	    // case DATA_FETCH_SUCCESS: {
	    //     return { isFetching: false, data: { ...state.data, action.payload }};
	    // }
	    case DATA_FETCH_ERROR: {
	        return { ...state, isFetching: false };
	    }
    default:
        return state;
  }
}

const reducers = { app };
module.exports = combineReducers(reducers);
