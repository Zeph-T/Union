import mongoose from 'mongoose';

let userSchema = mongoose.Schema({
    Name:{
        type:String,
        required : true
    },
    RollNo : {
        type:Number,
        required:true
    },
    Password :{type:String},
    Email  : {type:String,lowercase : true},
    Batch  :{ type:String,enum:['BCS','IMT','IMG']}
})

export default mongoose.model('User',userSchema);