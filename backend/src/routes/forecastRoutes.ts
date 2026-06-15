import express from "express";
import {
  create,
  getForecasts,
  getForecast,
  update,
  remove,
} from "../controllers/forecastController";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protect, create);
router.get("/", protect, getForecasts);
router.get("/:id", protect, getForecast);
router.put("/:id", protect, update);
router.delete("/:id", protect, remove);

export default router;