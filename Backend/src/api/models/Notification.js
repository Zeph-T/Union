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
    }]
})

export default mongoose.model('Notification',notificationSchema);