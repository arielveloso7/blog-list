import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    author: {
        type: String,
        required: [true, 'nombre obligatorio']
    },
    url: {
        type: String,
        required: [true, 'la url es necesaria']
    },
    likes: {
        type: Number,
        min: 1,
        max: 100
    }
});

export default blogSchema;
