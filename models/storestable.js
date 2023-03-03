
const mongoose = require('mongoose');

const newstoreSchema = new mongoose.Schema({
        Store_Id:{type:Number, required:true},
        slug:{type:String, required:true, unique:true},
        img:{type:String  ,required:true},
        Store_Name:{type: String, required:true},
        Store_Details:{type: String, required:true},
        Store_Lis:{type: String, required:true, unique:true},
        Store_Add: {type:String, required:true},
        Type:{type:String, required:true},
        Contact: {type: Number, required:true}
},{timestamps:true});

mongoose.models={}

 export default mongoose.model("storestable",newstoreSchema);
//export default mongoose.models.storestable || mongoose.models("storestable", newstoreSchema);