import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";
import express from "express";
import axios from "axios";
import { Stream } from "openai/streaming.mjs";

dotenv.config({ path: "../.env" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
  project: process.env.OPENAI_PROJECT_ID,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: "gpt-4",
          messages: messages
      }, {
          headers: {
              'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
              'Content-Type': 'application/json'
          }
      });
      res.json(response.data);
  } catch (error) {
      console.error('Error calling OpenAI API:', error);
      res.status(500).send('Error processing your request');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});