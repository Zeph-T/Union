import mongoose from 'mongoose';

let slotSchema = mongoose.Schema({
    startTime:Date,
    endTime : Date
})

let eventSchema = mongoose.Schema({
    Organiser : {
        type:mongoose.Types.ObjectId,
        ref:'Club'
    },
    Date:{
        type:Date
    },
    Slot : slotSchema,
    Title : {
        type:String,
        required: true
    },
    Body : {
        type:String
    },
    Links :[{
        type:String
    }]
})

export default mongoose.model('Event',eventSchema);