import {LOGIN , LOGOUT} from '../ActionTypes';

const auth = (state={isLoggedIn : false,token:null,isAdmin : false},action)=>{
    switch (action.type) {
        case LOGIN:
          return {
            ...state,
            isLoggedIn: true,
            isAdmin : action.payload.myEvents ? true : false,
            token: action.payload.token
          };
        case LOGOUT:
          return {...state, isLoggedIn: false, token: null};
        default:
          return state;
      }
}

export default auth;