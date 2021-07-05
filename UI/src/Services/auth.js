import axios from 'axios';
import {LOGIN_URL, SIGNUP_URL} from '../Utils/constants';

export const login = async(email,password)=>{
    try{
        const {data} = await axios.post(LOGIN_URL,{email,password});
        return data;
    }catch(err){
        throw err;
    }
}

export const signin = async(name,email,password,batch,rollno)=>{
    try{
        await axios.post(SIGNUP_URL,{name,email,password,batch,rollno});
        return {"message":'Succesfully Registered!'};
    }catch(err){
        return {'message':err.stack}
    }
};