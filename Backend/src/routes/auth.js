import * as userApi from '../api/controllers/user';
import * as clubApi from '../api/controllers/clubs'

module.exports = (router)=>{
    router.post('/signup',userApi.SignUp);
    router.post('/login',userApi.login);
    router.post('/adminLogin',clubApi.login);
}