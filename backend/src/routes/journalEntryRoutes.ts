import express from "express";

import {
  create,
  getJournalEntries,
  getJournalEntry,
  update,
  remove,
} from "../controllers/journalEntryController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getJournalEntries);
router.get("/:id", protect, getJournalEntry);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;