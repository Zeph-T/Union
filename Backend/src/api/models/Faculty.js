import mongoose from 'mongoose';


let facultySchema = mongoose.Schema({
    Name:{Type:String,required:true},
    ImageURL : {Type:String},
    Designation : {Type:String}
})



export default mongoose.model('Faculty',facultySchema);