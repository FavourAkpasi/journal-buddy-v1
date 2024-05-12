import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    role: { type: String, required: true },
    content: { type: String, required: true },
  });

const Message = mongoose.model('Message', MessageSchema);

export default Message;