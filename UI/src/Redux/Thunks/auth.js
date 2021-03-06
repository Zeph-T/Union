import * as ActionTypes from '../ActionTypes';

import * as authService from '../../Services/auth';

export const login = (email,password) => async(dispatch) =>{
    try{
        const data = await authService.login(email,password);
        if(data.message ===' No User with the Email!'){
            return  data.message;
        }
        dispatch({
            type:ActionTypes.USER_DETAILS_SUCCESS,
            payload : data
        })
        dispatch({
            type:ActionTypes.LOGIN,
            payload : data
        })
}catch(err){
        throw err;
    }
}

export const adminLogin = (ClubId,Password) => async(dispatch) => {
    try{
        const data = await authService.adminLogin(ClubId,Password);
        dispatch({
            type:ActionTypes.LOGIN,
            payload : data
        })
        dispatch({
            type:ActionTypes.USER_DETAILS_SUCCESS,
            payload : data
        })
    }catch(err){
        throw err;
    }
}


export const logout = () => (dispatch) => {
    try{
        dispatch({
            type:ActionTypes.LOGOUT
        }),
        dispatch({
            type:ActionTypes.CLEAR_USER_DETAILS
        })
    }catch(err){
        throw err;
    }
}