import mongoose from "mongoose";

const entrySchema = new mongoose.Schema(
  {
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

const Entry = mongoose.model("Entry", entrySchema);

export default Entry;
