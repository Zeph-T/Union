import mongoose from 'mongoose';


let clubSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Members :[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }],
    ClubId : {
        type:String,
        required: true
    },
    Events : [{
        type:mongoose.Types.ObjectId,
        ref:'Event'
    }],
    Notifications : [{
        type:mongoose.Types.ObjectId,
        ref:'Notification'
    }],
    LogoURL : {type:String},
    Mentor : [{
        type:mongoose.Types.ObjectId,
        ref:'Faculty'
    }],
    ClubColor:{type:String}
})

export default mongoose.model('Club',clubSchema);