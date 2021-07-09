import mongoose from 'mongoose';


let facultySchema = mongoose.Schema({
    Name:{type:String,required:true},
    FacultyId : {type:String,required:true},
    ImageURL : {type:String},
    Designation : {type:String},
    Password : {type:String,required:true},
    Events : {type:Array , default : []}
})



export default mongoose.model('Faculty',facultySchema);