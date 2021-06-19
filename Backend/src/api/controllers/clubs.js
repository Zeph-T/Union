import mongoose from 'mongoose';
import Club from '../models/Club';


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


