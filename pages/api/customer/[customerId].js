import Customer from "@/models/Customer";
import connecDB from "@/utils/connectDB";

export default async function handler(req, res) {
    try {
        await connecDB();
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'failed', massege: 'Error in connecting to DB' });
        return;
    }
    if (req === "GET") {
        const id = req.query.customerId;
        try {
            const customer = await Customer.findOne({ _id: id });
            res.status(200).json({status:"success", data:customer})
        } catch (err) {
            console.log(err);
            res.status(500).json({status:"failed", message:"Error in retrieving data form DB"})
        }
    }
}