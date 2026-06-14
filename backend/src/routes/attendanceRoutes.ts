import express from "express";

import {
  create,
  getAttendance,
  getAttendanceRecord,
  update,
  remove,
} from "../controllers/attendanceController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);

router.get("/", protect, getAttendance);

router.get("/:id", protect, getAttendanceRecord);

router.put("/:id", protect, update);

router.delete("/:id", protect, remove);

export default router;