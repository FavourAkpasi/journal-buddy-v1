
import asyncHandler from "express-async-handler";
import Entry from "../models/Entry.js";


const addEntry = asyncHandler(async (req, res) => {
  const { title, text } = req.body;

  const entry = await Entry.create({
    userId: req.user._id,
    title,
    text,
  });

  res.status(201).json(entry);
});

const getEntries = asyncHandler(async (req, res) => {
  const entries = await Entry.find({ userId: req.user._id});
  res.status(200).json(entries);
});

const updateEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  const updatedEntry = await Entry.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
    },
    {
      new: true,
    }
  );

  res.status(200).json(updatedEntry);
});

const deleteEntry = asyncHandler(async (req, res) => {
  const entry = await Entry.findByIdAndDelete(req.params.id);
  res.status(200).json('Entry deleted');
});

export { addEntry, getEntries, updateEntry, deleteEntry };
