import mongoose from "mongoose";
const { Schema, model } = mongoose;


const entrySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Entry = model("Entry", entrySchema);

export default Entry;
