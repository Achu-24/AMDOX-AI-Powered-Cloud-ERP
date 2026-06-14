import express from "express";

import {
  create,
  getDashboards,
  getDashboard,
  update,
  remove,
} from "../controllers/dashboardController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);

router.get("/", protect, getDashboards);

router.get("/:id", protect, getDashboard);

router.put("/:id", protect, update);

router.delete("/:id", protect, remove);

export default router;