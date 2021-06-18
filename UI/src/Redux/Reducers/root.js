import auth from './auth';
import activities from './activities';
import user from './user';
import { combineReducers } from 'redux';


export default combineReducers({
    'auth':auth,'activities':activities,'user':user
});