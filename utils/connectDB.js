
import mongoose from "mongoose";

const connecDB = async () => {
    const uri = "mongodb+srv://rozmeh:12345@cluster0.0rc60m5.mongodb.net/?retryWrites=true&w=majority";     
        if (mongoose.connections[0].readyState) return;
        mongoose
        .connect(uri, console.log('connected to db'))
        .catch (error => console.log(error));
};

export default connecDB;
