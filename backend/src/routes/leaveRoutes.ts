import express from "express";

import {
  create,
  getLeaves,
  getLeave,
  update,
  remove,
} from "../controllers/leaveController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);

router.get("/", protect, getLeaves);

router.get("/:id", protect, getLeave);

router.put("/:id", protect, update);

router.delete("/:id", protect, remove);

export default router;