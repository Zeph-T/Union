import mongoose from 'mongoose';

let slotSchema = mongoose.Schema({
    startTime:String,
    endTime : String
})

let eventSchema = mongoose.Schema({
    Organiser : {
        type:mongoose.Types.ObjectId,
        ref:'Club'
    },
    date:{
        type:String
    },
    slot : slotSchema,
    name : {
        type:String,
        required: true
    },
    body : {
        type:String
    },
    Links :[{
        type:String
    }]
})

export default mongoose.model('Event',eventSchema);