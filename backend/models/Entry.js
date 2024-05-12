import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: false,
    },
    entry: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    });

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;