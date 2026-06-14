import express from "express";

import {
  getUsers,
  getUser,
  editUser,
  removeUser,
} from "../controllers/userController";

import { protect } from "../middleware/auth.middleware";
import { authorize } from "../middleware/rbac.middleware";

const router = express.Router();

router.get(
  "/",
  protect,
  authorize("manage_users"),
  getUsers
);

router.get("/:id", protect, getUser);

router.put("/:id", protect, editUser);

router.delete("/:id", protect, removeUser);

export default router;