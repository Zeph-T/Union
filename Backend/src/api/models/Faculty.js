import mongoose from 'mongoose';


let facultySchema = mongoose.Schema({
    Name:{type:String,required:true},
    ImageURL : {type:String},
    Designation : {type:String}
})



export default mongoose.model('Faculty',facultySchema);