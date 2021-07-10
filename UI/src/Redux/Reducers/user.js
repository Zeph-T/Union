import {
    USER_DETAILS_SUCCESS,CLEAR_USER_DETAILS,EDIT_USER_DETAILS, FETCH_NOTIFICATIONS_SUCCESS
} from '../ActionTypes';

let initialState = {_id:null,name:null,email:null,myEvents:[],batch : null};

const user = (state=initialState,action)=>{
    switch(action.type){
        case USER_DETAILS_SUCCESS : 
            return {...state,_id:action.payload._id,name:action.payload.name,email:action.payload.email,myEvents :action.payload.myEvents ? action.payload.myEvents : [],batch  : action.payload.batch};
        case EDIT_USER_DETAILS : 
            return {...state , ...action.payload.user};
        case CLEAR_USER_DETAILS : 
            return initialState;
        default : 
            return state;
    }
}

export default user;