import { Request, Response } from "express";
import {
  createPayroll,
  getAllPayrolls,
  getPayrollById,
  updatePayroll,
  deletePayroll,
} from "../services/payrollService";

export const create = async (req: Request, res: Response) => {
  try {
    const payroll = await createPayroll(req.body);

    res.status(201).json({
      success: true,
      data: payroll,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPayrolls = async (req: Request, res: Response) => {
  try {
    const payrolls = await getAllPayrolls();

    res.status(200).json({
      success: true,
      data: payrolls,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPayroll = async (req: any, res: Response) => {
  try {
    const payroll = await getPayrollById(req.params.id);

    res.status(200).json({
      success: true,
      data: payroll,
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
    const payroll = await updatePayroll(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: payroll,
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
    const result = await deletePayroll(req.params.id);

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