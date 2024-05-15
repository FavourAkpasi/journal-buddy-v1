import express from 'express';
import { getMessages, sendMessage } from '../controllers/messageController.js';
import { deleteEntry } from '../controllers/entryController.js';



const router = express.Router();

router.post("/", sendMessage)
router.get("/:entryId", getMessages)
// router.delete("/:entryId", deleteEntry)
// router.put("/:entryId", sendMessage)

// router.post("/:entryId", async (req, res) => {
//     const { message } = req.body;
//     console.log(req);
//     try {
//       const response = await axios.post(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           model: "gpt-4",
//           messages: [
//             { role: "system", content: "You are a Therapist, you have conversation about journal entries." },
//             { role: "user", content: message },
//           ],
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("OpenAI response:", response.data.choices[0]);
//       const content = response.data.choices[0].message.content;
//       const role = response.data.choices[0].message.role;
//       const entryId = req.params.entryId;
//       res.send({ role, content, entryId});
//     } catch (error) {
//       console.error("Error calling OpenAI API:", error);
//       res
//         .status(500)
//         .json({
//           message: "Error processing your request",
//           details: error.message,
//         });
//     }
//   });

  export default router;