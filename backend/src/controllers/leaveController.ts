import { Request, Response } from "express";
import {
  createLeave,
  getAllLeaves,
  getLeaveById,
  updateLeave,
  deleteLeave,
} from "../services/leaveService";

export const create = async (req: Request, res: Response) => {
  try {
    const leave = await createLeave(req.body);

    res.status(201).json({
      success: true,
      data: leave,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getLeaves = async (req: Request, res: Response) => {
  try {
    const leaves = await getAllLeaves();

    res.status(200).json({
      success: true,
      data: leaves,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getLeave = async (req: any, res: Response) => {
  try {
    const leave = await getLeaveById(req.params.id);

    res.status(200).json({
      success: true,
      data: leave,
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
    const leave = await updateLeave(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: leave,
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
    const result = await deleteLeave(req.params.id);

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