import express from "express";
import {
  create,
  getPurchaseOrders,
  getPurchaseOrder,
  update,
  remove,
} from "../controllers/purchaseOrderController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getPurchaseOrders);
router.get("/:id", protect, getPurchaseOrder);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;