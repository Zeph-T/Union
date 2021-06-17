import User from '../models/User';
import { JWTSECRET } from '../../config/secrets';
import jwt from 'jsonwebtoken';

export function SignUp(req,res){
    try{
        if(req.body && req.body.Name && req.body.RollNo && req.body.Password && req.body.Email && req.body.Batch){
            let newUser = new User();
            newUser.Email = req.body.Email;
            newUser.RollNo = req.body.Batch;
            newUser.Password = User.generateHash(req.body.Password);
            newUser.Name = req.body.Name;
            newUser.Batch = req.body.Batch;
            newUser.save((err,user)=>{
                if(err){
                    res.status(400);
                    return res.send({'message':'Something went Wrong!Try Again'});
                }else{
                    res.status(200);
                    return res.send({'message':'User Registered Succesfully!'});
                }
            })
        }else{
            throw 'User Detais are Incomplete!'
        }
    }catch(err){
        res.status(400);
        return res.send({"message":err});
    }
}


export function login(req,res){
    try{
        if(req.body && req.body.email && req.body.Password){
            User.findOne({email:req.body.email}).then(oUser=>{
                if(!oUser){
                    res.status(404);
                    return res.send({"message":"No User with the Email!"});
                }else{
                    if(oUser.validPassword(req.body.Password)){
                        const today = new Date();
                        const exp = new Date(today);
                        exp.setDate(today.getDate() + 1000000);
                        const token = jwt.sign({
                            oUser,
                            exp: exp.getTime() / 1000
                        },
                          JWTSECRET
                        );
                        return token;
                    }else{
                        res.status(401);
                        return res.send({"message":'Password Incorrect'});
                    }
                }
            }).catch(err=>{
                res.status(400);
                return res.send({'message':err.stack});
            })
        }
    }catch(err){
        res.status(400);
        return res.send({"message":'Error Retrieving Details,Try Again Later!'});
    }
}