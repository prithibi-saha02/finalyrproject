const mongoose = require('mongoose');

const requestschema = new mongoose.Schema({
    SR_Id: {type: Number, required: true},
    Service:[{
        ServiceId:{type: String},
        U_Name:{type: String},
    }],
    Storeinfo:[{
        Store_Id:{type:Number},
        Store_Name:{type: String},
        Store_Details:{type: String},
        Contact: {type: Number}
    }]
    
},{timestamps:true});

//export default mongoose.model("servrequest",requestschema);
export default mongoose.models.servrequest || mongoose.model("servrequest", requestschema);