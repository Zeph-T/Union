import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

let userSchema = mong0oose.Schema({
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
    Batch  :{ type:String,required:true},
})

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
}


export default mongoose.model('User',userSchema);