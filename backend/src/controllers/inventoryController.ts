import { Request, Response } from "express";

import {
  createInventory,
  getAllInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
} from "../services/inventoryService";

export const create = async (req: Request, res: Response) => {
  try {
    const inventory = await createInventory(req.body);

    res.status(201).json({
      success: true,
      data: inventory,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getInventories = async (
  req: Request,
  res: Response
) => {
  try {
    const inventories = await getAllInventories();

    res.status(200).json({
      success: true,
      data: inventories,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getInventory = async (
  req: any,
  res: Response
) => {
  try {
    const inventory = await getInventoryById(req.params.id);

    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req: any, res: Response) => {
  try {
    const inventory = await updateInventory(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req: any, res: Response) => {
  try {
    const result = await deleteInventory(req.params.id);

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};