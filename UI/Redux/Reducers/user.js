import {
    USER_DETAILS_SUCCESS,CLEAR_USER_DETAILS,FETCH_EVENTS_SUCCESS, FETCH_NOTIFICATIONS_SUCCESS
} from '../ActionTypes';

let initialState = {_id:null,name:null,email:null,myEvents:[]};

const user = (state=initialState,action)=>{
    switch(action.type){
        case USER_DETAILS_SUCCESS : 
            return {...state,...action.payload.user};
        case EDIT_USER_DETAILS : 
            return {...state , ...action.payload.user};
        case CLEAR_USER_DETAILS : 
            return initialState;
        default : 
            return state;
    }
}

export default user;