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
    if (req.method === "DELETE") {
        const id = req.query.customerId;
        try {
            await Customer.deleteOne({ _id: id });
            res.status(200).json({ status: "success", message: "Deta Deleted" });
        } catch (err) {
            console.log(err);
            res.status(400).json({status:'failed', message:"Error in deleting data form db"})
        }
    }
}