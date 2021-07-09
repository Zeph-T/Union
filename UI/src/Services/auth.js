import axios from 'axios';
import {ADMIN_LOGIN_URL, LOGIN_URL, SIGNUP_URL} from '../Utils/constants';

export const login = async(email,password)=>{
    try{
        const {data} = await axios.post(LOGIN_URL,{email,password});
        return data;
    }catch(err){
        console.log(err.response.data);
        throw err.response.data;
    }
}

export const adminLogin = async(ClubId, Password) => {
    try{
        const {data} = await axios.post(ADMIN_LOGIN_URL , {ClubId, Password});
        return data;
    }catch(err){
        console.log(err.response.data);
        throw err.response.data;
    }
}

// export const signin = async(name,email,password,batch,rollno)=>{
//     try{
//         await axios.post(SIGNUP_URL,{"name": name,"email":email,"password":password,"batch" :  batch,"rollno" : rollno});
//         return {"message":'Succesfully Registered!'};
//     }catch(err){
//         console.log(err.response.data);
//         return {'message':err.stack}
//     }u
// };