import { Request, Response } from "express";

import {
  createVendor,
  getAllVendors,
  getVendorById,
  updateVendor,
  deleteVendor,
} from "../services/vendorService";

export const create = async (req: Request, res: Response) => {
  try {
    const vendor = await createVendor(req.body);

    res.status(201).json({
      success: true,
      data: vendor,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getVendors = async (req: Request, res: Response) => {
  try {
    const vendors = await getAllVendors();

    res.status(200).json({
      success: true,
      data: vendors,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getVendor = async (req: any, res: Response) => {
  try {
    const vendor = await getVendorById(req.params.id);

    res.status(200).json({
      success: true,
      data: vendor,
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
    const vendor = await updateVendor(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: vendor,
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
    const result = await deleteVendor(req.params.id);

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