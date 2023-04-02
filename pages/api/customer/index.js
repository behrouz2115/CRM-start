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
    if (req.method == "POST") {
        const data = req.body.data;
        if (!data.name || !data.lastName || !data.email) return res.status(400).json({ status: 'failed', massege: 'Invaled data' });
        try {
            const customer = await Customer.create({ data });
            res.status(201).json({status:'success', massege:'customer created', data:customer})
        } catch (err) {
            console.log(err);
            res.status(500).json({ status: 'failed', massege: 'Error in saving data in DB' });
        }
    }
}