import _ from 'lodash';
import { combineReducers } from 'redux';

import { FETCH_TODOS, 
         UPDATE_TODOS,
         ADD_TODO,
         UPDATE_TODO,
         DELETE_TODO} from '../actions';

const rootReducer = combineReducers({
    todos: todosReducer
});

function todosReducer(state = {}, action) {
    switch(action.type) {
        case FETCH_TODOS:
            return _.mapKeys(action.payload.data.todos, 'id');
        case UPDATE_TODOS:
            return _.mapKeys(action.payload.data.todos, 'id');
        case ADD_TODO:
            return { ...state, [action.payload.data.id]: action.payload.data }
        case UPDATE_TODO:
            return { ...state, [action.payload.data.id]: action.payload.data }
        case DELETE_TODO:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}

export default rootReducer;
