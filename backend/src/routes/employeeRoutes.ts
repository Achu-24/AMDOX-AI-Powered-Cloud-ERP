import express from "express";

import {
  create,
  getEmployees,
  getEmployee,
  update,
  remove,
} from "../controllers/employeeController";

import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);

router.get("/", protect, getEmployees);

router.get("/:id", protect, getEmployee);

router.put("/:id", protect, update);

router.delete("/:id", protect, remove);

export default router;