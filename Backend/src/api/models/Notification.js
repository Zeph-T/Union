import mongoose from 'mongoose';

let notificationSchema = mongoose.Schema({
    postedby : {
        type:String
    },
    title:{
        type:String
    },
    info:{
        type:String
    },
    AllMembers : {
        type:Boolean,
        default:true
    },
    Batches : [{
        type:'String'
    }],
    date  : {type:Date,default : Date.now()}
})

export default mongoose.model('Notification',notificationSchema);