const mongoose = require('mongoose');

const newuserSchema = new mongoose.Schema({
        Name:{type:String, required :true},
        Ph_No:{type:Number, required:true},
        E_mail:{type:String, required:true, unique:true},
        Address:{type:String, required:true},
        Postal:{type:Number, required:true, unique:true},
        password:{type:String, required:true}
},{timestamps:true});

//export default mongoose.model("User",newuserSchema);

export default mongoose.models.User || mongoose.model("User", newuserSchema);