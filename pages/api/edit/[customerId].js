import connecDB from "@/utils/connectDB";

export default async function handler(req, res) {
    try {
        await connecDB();
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'failed', massege: 'Error in connecting to DB' });
        return;
    }
}