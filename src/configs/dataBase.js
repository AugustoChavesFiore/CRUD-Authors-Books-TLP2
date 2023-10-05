import { connect } from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    }
    catch (err) {
        console.error(err);
    }
}