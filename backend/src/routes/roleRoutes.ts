import express from "express";

import {
  create,
  getRoles,
  getRole,
  update,
  remove,
} from "../controllers/roleController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);

router.get("/", protect, getRoles);

router.get("/:id", protect, getRole);

router.put("/:id", protect, update);

router.delete("/:id", protect, remove);

export default router;