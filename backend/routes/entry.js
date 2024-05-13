import express from "express";
import { addEntry, getEntries,  updateEntry, deleteEntry } from "../controllers/entryController.js";

const router = express.Router();


router.post("/entry/new", addEntry);
router.get("/entry/all", getEntries);
router.delete("/entry/delete/:id", deleteEntry);
router.put("/entry/update/:id", updateEntry);

export default router;
