import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGODB_URI;

export default mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });