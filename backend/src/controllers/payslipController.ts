import { Request, Response } from "express";
import {
  createPayslip,
  getAllPayslips,
  getPayslipById,
  updatePayslip,
  deletePayslip,
} from "../services/payslipService";

export const create = async (req: Request, res: Response) => {
  try {
    const payslip = await createPayslip(req.body);

    res.status(201).json({
      success: true,
      data: payslip,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPayslips = async (req: Request, res: Response) => {
  try {
    const payslips = await getAllPayslips();

    res.status(200).json({
      success: true,
      data: payslips,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPayslip = async (req: any, res: Response) => {
  try {
    const payslip = await getPayslipById(req.params.id);

    res.status(200).json({
      success: true,
      data: payslip,
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
    const payslip = await updatePayslip(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: payslip,
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
    const result = await deletePayslip(req.params.id);

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