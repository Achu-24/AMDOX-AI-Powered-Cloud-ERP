import express from "express";
import {
  create,
  getWidgets,
  getWidget,
  update,
  remove,
} from "../controllers/widgetController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getWidgets);
router.get("/:id", protect, getWidget);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;