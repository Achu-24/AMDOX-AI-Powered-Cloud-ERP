import { Request, Response } from "express";

import {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
} from "../services/reportService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const report = await createReport(req.body);

    res.status(201).json({
      success: true,
      data: report,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getReports = async (
  req: Request,
  res: Response
) => {
  try {
    const reports = await getAllReports();

    res.status(200).json({
      success: true,
      data: reports,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getReport = async (
  req: any,
  res: Response
) => {
  try {
    const report = await getReportById(req.params.id);

    res.status(200).json({
      success: true,
      data: report,
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
    const report = await updateReport(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: report,
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
    const result = await deleteReport(req.params.id);

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