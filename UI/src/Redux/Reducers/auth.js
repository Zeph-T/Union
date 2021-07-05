import {LOGIN , LOGOUT} from '../ActionTypes';

const auth = (state={isLoggedIn : true,token:null,isAdmin : true},action)=>{
    switch (action.type) {
        case LOGIN:
          return {
            ...state,
            isLoggedIn: true,
            token: action.payload.token,
          };
        case LOGOUT:
          return {...state, isLoggedIn: false, token: null};
        default:
          return state;
      }
}

export default auth;