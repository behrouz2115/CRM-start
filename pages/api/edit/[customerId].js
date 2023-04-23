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
    if (req.method === "PATCH") {
        const id = req.query.customerId;
        const data = req.body.data;
        try {
            const customer = await Customer.findOne({ _id: id });
            customer.name = data.name;
            customer.lastName = data.lastName;
            customer.email = data.email;
            customer.phone = data.phone;
            customer.address = data.address;
            customer.postalCode = data.postalCode;
            customer.date = data.date;
            customer.products = data.products;
            customer.updatedAd = Date.now();
            customer.save();
            res.status(200).json({status:'success',data:customer})
        } catch (err) {
            console.log(err);
            res.status(400).json({status:'failed', message:"Error in editting data form db"})
        }
    }
}