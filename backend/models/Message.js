import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    entryId: { type: String, required: true },
    role: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
