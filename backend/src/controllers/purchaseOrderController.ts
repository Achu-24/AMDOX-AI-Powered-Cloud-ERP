import { Request, Response } from "express";

import {
  createPurchaseOrder,
  getAllPurchaseOrders,
  getPurchaseOrderById,
  updatePurchaseOrder,
  deletePurchaseOrder,
} from "../services/purchaseOrderService";

export const create = async (req: Request, res: Response) => {
  try {
    const po = await createPurchaseOrder(req.body);

    res.status(201).json({
      success: true,
      data: po,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPurchaseOrders = async (
  req: Request,
  res: Response
) => {
  try {
    const purchaseOrders = await getAllPurchaseOrders();

    res.status(200).json({
      success: true,
      data: purchaseOrders,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPurchaseOrder = async (
  req: any,
  res: Response
) => {
  try {
    const po = await getPurchaseOrderById(req.params.id);

    res.status(200).json({
      success: true,
      data: po,
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
    const po = await updatePurchaseOrder(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: po,
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
    const result = await deletePurchaseOrder(req.params.id);

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