import express from "express";
import {
  create,
  getInventories,
  getInventory,
  update,
  remove,
} from "../controllers/inventoryController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getInventories);
router.get("/:id", protect, getInventory);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;