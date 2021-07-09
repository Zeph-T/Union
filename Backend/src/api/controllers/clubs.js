import mongoose from 'mongoose';
import Club from '../models/Club';
import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../../config/secrets';
export function getClubData(req,res){
    try{
        Club.find({}).populate({path:'Events'}).populate({path:'Notifications'}).then(oClubs=>{
            res.status(200);
            return res.send(oClubs);
        }).catch(err=>{
            res.status(401);
            return res.send({"message":err.stack});
        })
    }catch(err){
        res.status(400);
        return res.send({"message":err.stack});
    }
}


export function login(req,res){
    try{
        if(req.body && req.body.ClubId && req.body.Password){
            Club.findOne({ClubId:req.body.ClubId}).then(oUser=>{
                if(!oUser){
                    res.status(404);
                    return res.send({"message":"No User with the Email!"});
                }else{
                    if(oUser._doc.Password === req.body.Password){
                    // if(oUser.validPassword(req.body.Password)){
                        const today = new Date();
                        const exp = new Date(today);
                        exp.setDate(today.getDate() + 1000000);
                        const token = jwt.sign({
                            oUser,
                            exp: exp.getTime() / 1000
                        },
                          JWTSECRET
                        );
                        return res.status(200).send({"token" : token,"email":oUser.Email, "name":oUser.Name, "_id" : oUser._id.toString(),"myEvents" : oUser.Events});
                    }else{
                        return res.status(404).send({"message" : "Password Incorrect!"})
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
