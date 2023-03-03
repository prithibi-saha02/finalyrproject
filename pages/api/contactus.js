import contactus from "../../models/User"
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let c = new contactus(req.body)
        await u.save()
        res.status(200).json({ success: "Success" })
    }

    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDB(handler);