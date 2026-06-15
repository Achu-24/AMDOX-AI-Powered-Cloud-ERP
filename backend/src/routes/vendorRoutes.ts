import express from "express";
import {
  create,
  getVendors,
  getVendor,
  update,
  remove,
} from "../controllers/vendorController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getVendors);
router.get("/:id", protect, getVendor);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;