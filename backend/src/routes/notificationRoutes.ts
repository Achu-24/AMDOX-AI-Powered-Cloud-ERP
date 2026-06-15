import express from "express";
import {
  create,
  getNotifications,
  getNotification,
  update,
  remove,
} from "../controllers/notificationController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getNotifications);
router.get("/:id", protect, getNotification);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;