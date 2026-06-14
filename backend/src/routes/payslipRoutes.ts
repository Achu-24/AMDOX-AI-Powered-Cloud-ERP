import express from "express";

import {
  create,
  getPayslips,
  getPayslip,
  update,
  remove,
} from "../controllers/payslipController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);

router.get("/", protect, getPayslips);

router.get("/:id", protect, getPayslip);

router.put("/:id", protect, update);

router.delete("/:id", protect, remove);

export default router;