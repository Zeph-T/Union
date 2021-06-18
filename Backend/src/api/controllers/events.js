import Event from '../models/Event';
import mongoose from 'mongoose';
import Club from '../models/Club';
export function getAllEvents(req,res){
    try{
        Event.find({}).sort({_id:-1}).limit(5).populate({path:'Organiser',select:{name:1,_id:0}}).then(oEvents=>{
            res.status(200);
            return res.send(oEvents);
        }).catch(err=>{
            res.status(400);
            return res.send({'message':err.stack});
        })
    }catch(err){
        res.status(400);
        return res.send({'message':err.stack});
    }
}

export function getEventByClub(req,res){
    try{
        Event.find({Organiser : mongoose.Types.ObjectId(req.body.Organiser)}).populate({path:'Organiser',select:{Name:1,_id:0}}).then(oEvents=>{
            res.status(200);
            return res.send(oEvents);
        }).catch(err=>{
            res.status(400);
            return res.send({'message':err.stack});
        })
    }catch(err){
        res.status(400);
        return res.send({'message':'Error getting Data'});
    }ganiser
}


export function AddEvent(req,res){
    try {
        let Organiser = Club.findOne({Name:req.body.Organiser},{_id:1})
        let newEvent = new Event();
        newEvent.Organiser = Organiser._id;
        newEvent.Date = new Date(req.body.date);
        newEvent.Slot.startTime = req.body.startTime;
        newEvent.Slot.endTime = req.body.endTime;
        newEvent.Title = req.body.title;
        newEvent.Links = req.body.links;
        newEvent.body = req.body.body;
        newEvent.save((err, oEvent) => {
            if (err) {
                res.status(401);
                return res.send({ 'message': 'Error Adding the Notification' });
            } else {
                res.status(200);
                return res.status({ 'message': 'Posted Succesfully' });
            }
        })
    } catch (err) {
        res.status(400);
        return res.send({ 'message': 'Error Occured!Please Try Again' });
    }
}