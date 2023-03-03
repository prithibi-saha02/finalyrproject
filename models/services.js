const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
        Service_ID:{type:Number, required:true},
        S_Name:{type: String, required:true},
        S_Details:{type: String, required:true},
        S_Area: {type:String, required:true},
        Type:{type:String, required:true},
        S_connect: {type: Number, required:true}
},{timestamps:true});

//export default mongoose.model("storestable",serviceSchema);
export default mongoose.models.serviceSchema || mongoose.model("User", serviceSchema);