import Event from '../models/Event';
import mongoose from 'mongoose';
import Club from '../models/Club';
export function getAllEvents(req,res){
    try{
        Event.find({}).sort({_id:-1}).limit(5).then(oEvents=>{
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


export function getAllEventsForCalender(req,res){
    try{
        Event.find().sort({"date":1}).then(oEvents=>{
            let events = {};
            oEvents.map(oEvent=>{
                events[oEvent.date] = [];
            })
            oEvents.map(oEvent=>{
                events[oEvent.date].push(oEvent);
            })
            console.log(events);
            res.status(200);
            return res.send(events);
        }).catch(err=>{
            res.status(400);
            return res.send({'message' : err.stack});
        })
    }catch(err){
        res.status(400);
        return res.send({"message": err.stack});
    }
}

// export function getEventByClub(req,res){
//     try{
//         Event.find({_id: mongoose.Types.ObjectId(req.params.id)}).populate({path:'Organiser',select:{Name:1,_id:0}}).then(oEvents=>{
//             res.status(200);
//             return res.send(oEvents);
//         }).catch(err=>{
//             res.status(400);
//             return res.send({'message':err.stack});
//         })
//     }catch(err){
//         res.status(400);
//         return res.send({'message':'Error getting Data'});
//     }ganiser
// }


export function AddEvent(req,res){
    try {
        Event.find({$and : [{date : new Date(req.body.date).toISOString().split('T')[0]},{time : new Date(req.body.time).toTimeString().replace(/:[^:]*$/,'') }]}).then(oEvent=>{
            if(oEvent.length > 0){
                res.status(408);
                return res.send({'message': 'Looks like there is another event going on at the same time!, plese check the event calendar'})
            }else{
                let newEvent = new Event();
                newEvent.Organiser = req.body.Organiser;
                newEvent.date = new Date(req.body.date).toISOString().split('T')[0];
                newEvent.time = new Date(req.body.time).toTimeString().replace(/:[^:]*$/,'');
                newEvent.name = req.body.title;
                newEvent.links = req.body.links;
                newEvent.body = req.body.body;
                newEvent.save((err, oEvent) => {
                    if (err) {
                        res.status(401);
                        return res.send({ 'message': 'Error Adding the Notification' });
                    } else {
                        res.status(200);
                        return res.send({ 'message': 'Posted Succesfully' });
                    }
                })
            }
        }).catch(err=>{
            res.status(400);
            return res.send({'message' : err.stack});
        })
    } catch (err) {
        res.status(400);
        return res.send({ 'message': 'Error Occured!Please Try Again' });
    }
}