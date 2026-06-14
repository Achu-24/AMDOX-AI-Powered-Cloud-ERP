import { Request, Response } from "express";

import {
  createAttendance,
  getAllAttendance,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
} from "../services/attendanceService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const attendance = await createAttendance(req.body);

    res.status(201).json({
      success: true,
      data: attendance,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAttendance = async (
  req: Request,
  res: Response
) => {
  try {
    const attendance = await getAllAttendance();

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAttendanceRecord = async (
  req: any,
  res: Response
) => {
  try {
    const attendance = await getAttendanceById(req.params.id);

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (
  req: any,
  res: Response
) => {
  try {
    const attendance = await updateAttendance(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (
  req: any,
  res: Response
) => {
  try {
    const result = await deleteAttendance(req.params.id);

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