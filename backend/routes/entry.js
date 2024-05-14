import express from "express";
import { addEntry, getEntries,  updateEntry, deleteEntry } from "../controllers/entryController.js";
import requiresAuth from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/new", requiresAuth, addEntry);
router.get("/all", requiresAuth, getEntries);
router.delete("/delete/:id", requiresAuth, deleteEntry);
router.put("/update/:id", requiresAuth, updateEntry);

export default router;
