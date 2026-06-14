import express from "express";

import {
  create,
  getTenants,
  getTenant,
  update,
  remove,
} from "../controllers/tenantController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);

router.get("/", protect, getTenants);

router.get("/:id", protect, getTenant);

router.put("/:id", protect, update);

router.delete("/:id", protect, remove);

export default router;