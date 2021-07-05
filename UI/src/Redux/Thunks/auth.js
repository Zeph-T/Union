import * as ActionTypes from '../ActionTypes';

import * as authService from '../../Services/auth';

export const login = (email,password) => async(dispatch) =>{
    try{
        const data = await authService.login(email,password);
        dispatch({
            type:ActionTypes.LOGIN,
            payload : data
        })
    }catch(err){
        throw err;
    }
}

export const signin = async(name,email,password,batch,rollNo)=>{
    try{
        const data = await authService.signin(name,email,password,batch,rollNo);
        return data;
    }catch(err){
        return err.stack
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