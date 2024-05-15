import Message from "../models/Message.js";
import asyncHandler from "express-async-handler";
import axios from "axios";

const sendMessage = asyncHandler(async (req, res) => {
  const { content, entryId } = req.body;

  await Message.create({
    entryId,
    role: "user",
    content,
  });


  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a Therapist, you have conversation about journal entries.",
        },
        { role: "user", content: content },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log("OpenAI response:", response.data.choices[0]);

  const message = await Message.create({
    entryId,
    role: response.data.choices[0].message.role,
    content: response.data.choices[0].message.content,
  });

  res.send(message);
});

const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({ entryId: req.params.entryId });
  res.status(200).json(messages);
});

export { sendMessage, getMessages };
