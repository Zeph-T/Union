import * as userApi from '../api/controllers/user';

module.exports = (router)=>{
    router.post('/signup',userApi.SignUp);
    router.post('/login',userApi.login);
}