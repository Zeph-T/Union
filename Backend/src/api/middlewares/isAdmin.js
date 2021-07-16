import Club from '../models/Club';
import Faculty from '../models/Faculty';
import mongoose from 'mongoose'
export function isAdmin(req,res,next){
    if(req.body && req.body.Batches && req.body.title && req.body.body && req.body.PostedBy){
        Club.findOne({_id:mongoose.Types.ObjectId(req.body._id)}).then(admin=>{
            if(admin){
                next();
            }else{
                Faculty.findOne({_id:mongoose.Types.ObjectId(_id)}).then(fAdmin=>{
                    if(fAdmin){
                        next();
                    }else{
                        res.status(408);
                        return res.send({'message':'You are not Authorized to perform this action'});
                    }
                }).catch(err=>{
                    res.status(400);
                    return res.send({'message':err.stack});
                })
            }
        }).catch(err=>{
            res.status(400);
            return res.send({'message':err.stack});
        })
    }
}