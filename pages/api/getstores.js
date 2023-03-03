import storestable from "../../models/storestable"
import connectDB from "../../middleware/mongoose"

const handler = async (req, res)=>
{
    let stores = await storestable.find()
    res.status(200).json({stores})
}
export default connectDB(handler);
  