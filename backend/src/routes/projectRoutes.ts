import express from "express";
import {
  create,
  getProjects,
  getProject,
  update,
  remove,
} from "../controllers/projectController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getProjects);
router.get("/:id", protect, getProject);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;