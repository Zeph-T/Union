import mongoose from 'mongoose';

let notificationSchema = mongoose.Schema({
    PostedBy : {
        type:String
    },
    Title:{
        type:String
    },
    Body:{
        type:String
    },
    AllMembers : {
        type:Boolean,
        default:True
    },
    Batches : [{
        type:'String'
    }],
    PostedOn  : {type:Date,default : Date.now}
})

export default mongoose.model('Notification',notificationSchema);