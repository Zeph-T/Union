import mongoose from 'mongoose';



let eventSchema = mongoose.Schema({
    Organiser : {
        type:String
    },
    date:{
        type:String
    },
    time : {type:String},
    name : {
        type:String,
        required: true
    },
    body : {
        type:String
    },
    links :[{
        media : String,
        url : String
    }]
})

export default mongoose.model('Event',eventSchema);