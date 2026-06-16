import express from "express";
import {
  create,
  getAuditLogs,
  getAuditLog,
  update,
  remove,
} from "../controllers/auditLogController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getAuditLogs);
router.get("/:id", protect, getAuditLog);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;