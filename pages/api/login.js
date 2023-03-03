import User from "../../models/User"
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let user = await User.findOne({E_mail:req.body.E_mail})
        if (user) {
            if (req.body.E_mail == user.E_mail && req.body.password == user.password) {
                res.status(200).json({ success: true, Ph_No:user.Ph_No, Name:user.Name })
            }
            else{

                res.status(200).json({ success: false, error: "Bad Credentials" })
            }
        }
        else{
            res.status(200).json({ success: false, error: "No Such User found" })
        }
    }

    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDB(handler);