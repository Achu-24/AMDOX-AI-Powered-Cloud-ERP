import express from "express";
import {
  create,
  getReports,
  getReport,
  update,
  remove,
} from "../controllers/reportController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getReports);
router.get("/:id", protect, getReport);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;