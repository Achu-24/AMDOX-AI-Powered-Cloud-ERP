import { Request, Response } from "express";

import {
  createGoodsReceipt,
  getAllGoodsReceipts,
  getGoodsReceiptById,
  updateGoodsReceipt,
  deleteGoodsReceipt,
} from "../services/goodsReceiptService";

export const create = async (req: Request, res: Response) => {
  try {
    const receipt = await createGoodsReceipt(req.body);

    res.status(201).json({
      success: true,
      data: receipt,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getGoodsReceipts = async (
  req: Request,
  res: Response
) => {
  try {
    const receipts = await getAllGoodsReceipts();

    res.status(200).json({
      success: true,
      data: receipts,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getGoodsReceipt = async (
  req: any,
  res: Response
) => {
  try {
    const receipt = await getGoodsReceiptById(req.params.id);

    res.status(200).json({
      success: true,
      data: receipt,
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
    const receipt = await updateGoodsReceipt(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: receipt,
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
    const result = await deleteGoodsReceipt(req.params.id);

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