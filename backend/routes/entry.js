import express from "express";
import Entry from "../models/Entry.js";

const router = express.Router();

router.get("/entries", async (req, res) => {
    try {
        const entries = await Entry.find();
        res.json(entries);
    } catch (error) {
        console.error("Error fetching entries:", error);
        res.status(500).send(error.message);
    }
    });

router.post("/new-entry", async (req, res) => {
    try {
        const entry = new Entry(req.body);
        await entry.save();
        res.status(201).send("Journal entry Saved!");
    } catch (error) {
        res.status(400).send(error.message);
    }
    }
);

router.get("/:id", async (req, res) => {
    try {
        const entry = await Entry.findById(req.params.id);
        if (!entry) {
            return res.status(404).send("Entry not found");
        }
        res.json(entry);
    } catch (error) {
        res.status(500).send(error.message);
    }
    }
);

router.put("/:id", async (req, res) => {
    try {
        const entry = await Entry.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        if (!entry) {
            return res.status(404).send("Entry not found");
        }
        res.json(entry);
    } catch (error) {
        res.status(500).send(error.message);
    }
    }
);

router.delete("/:id", async (req, res) => {
    try {
        const entry = await Entry.findByIdAndDelete(req.params.id);
        if (!entry) {
            return res.status(404).send("Entry not found");
        }
        res.send("Entry deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
    }
);

export default router;