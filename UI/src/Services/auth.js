import axios from 'axios';
import {LOGIN_URL} from '../Utils/constants';

export const login = async(email,password)=>{
    try{
        const {data} = await axios.post(LOGIN_URL,{email,password});
        return data;
    }catch(err){
        throw err;
    }
}