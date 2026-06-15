import express from "express";
import {
  create,
  getBudgets,
  getBudget,
  update,
  remove,
} from "../controllers/budgetController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getBudgets);
router.get("/:id", protect, getBudget);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;