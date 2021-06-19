import * as ActionTypes from '../ActionTypes';

import {login as loginService} from '../../Services/auth';

export const login = async(email,password) = async(dispatch) =>{
    try{
        const data = await loginService(email,password);
        dispatch({
            type:ActionTypes.LOGIN,
            payload : data
        })
    }catch(err){
        throw err;
    }
}


export const logout = async() = (dispatch) => {
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