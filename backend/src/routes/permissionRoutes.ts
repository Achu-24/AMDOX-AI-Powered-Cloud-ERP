import express from "express";

import {
  create,
  getPermissions,
  getPermission,
  update,
  remove,
} from "../controllers/permissionController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);

router.get("/", protect, getPermissions);

router.get("/:id", protect, getPermission);

router.put("/:id", protect, update);

router.delete("/:id", protect, remove);

export default router;