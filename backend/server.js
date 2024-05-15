import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";
import express from "express";

import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import entryRouter from "./routes/entry.js";
import messageRouter from "./routes/message.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config({ path: "../.env" });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
  project: process.env.OPENAI_PROJECT_ID,
  dangerouslyAllowBrowser: true,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/entry", entryRouter);
app.use("/api/messages", messageRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
