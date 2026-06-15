import express from "express";

import {
  create,
  getAccounts,
  getAccount,
  update,
  remove,
} from "../controllers/chartOfAccountsController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getAccounts);
router.get("/:id", protect, getAccount);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;