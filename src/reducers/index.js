/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import { FETCH_USER, FETCH_USER_SUCCESS } from '../actions/';

const initialState = {
  fetching: false,
  userStats: []
};

function store (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, {
      	fetching: true
      });
    case FETCH_USER_SUCCESS:
      return Object.assign({}, state, {
      	fetching: false,
      	userStats: [
          ...state.userStats,
          {
            user: action.user,
            data: action.data
          }
        ]
      });
    default:
      return state;
  }
}

const reducers = { store };
module.exports = combineReducers(reducers);
