import express from "express";

import {
  create,
  getCurrencies,
  getCurrency,
  update,
  remove,
} from "../controllers/currencyController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getCurrencies);
router.get("/:id", protect, getCurrency);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;