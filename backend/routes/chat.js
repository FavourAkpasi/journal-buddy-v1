import express from 'express';
import axios from 'axios';



const router = express.Router();

router.post("/", async (req, res) => {
    const { message } = req.body;
    console.log(req);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            { role: "system", content: "You are a Therapist, you have conversation about journal entries." },
            { role: "user", content: message },
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
      const botReply = response.data.choices[0];
      res.send({ reply: botReply });
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      res
        .status(500)
        .json({
          message: "Error processing your request",
          details: error.message,
        });
    }
  });

  export default router;