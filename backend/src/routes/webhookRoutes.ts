import express from "express";
import {
  create,
  getWebhooks,
  getWebhook,
  update,
  remove,
} from "../controllers/webhookController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getWebhooks);
router.get("/:id", protect, getWebhook);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;