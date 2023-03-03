import storestable from "../../models/storestable"
import connectDB from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            console.log(req.body);
            let p = new storestable({
                Store_Id: req.body[i].Store_Id,
                slug: req.body[i].slug,
                img:req.body[i].img,
                Store_Name: req.body[i].Store_Name,
                Store_Details: req.body[i].Store_Details,
                Store_Lis: req.body[i].Store_Lis,
                Store_Add: req.body[i].Store_Add,
                Type: req.body[i].Type,
                Contact: req.body[i].Contact
            })
            await p.save()
        }
        res.status(200).json({ success: "Success" })
    }

    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDB(handler);