import express from "express";
import {
  create,
  getEvents,
  getEvent,
  update,
  remove,
} from "../controllers/eventController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getEvents);
router.get("/:id", protect, getEvent);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;