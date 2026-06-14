import { Request, Response } from "express";

import {
  createDashboard,
  getAllDashboards,
  getDashboardById,
  updateDashboard,
  deleteDashboard,
} from "../services/dashboardService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const dashboard = await createDashboard(req.body);

    res.status(201).json({
      success: true,
      data: dashboard,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDashboards = async (
  req: Request,
  res: Response
) => {
  try {
    const dashboards = await getAllDashboards();

    res.status(200).json({
      success: true,
      data: dashboards,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDashboard = async (
  req: any,
  res: Response
) => {
  try {
    const dashboard = await getDashboardById(req.params.id);

    res.status(200).json({
      success: true,
      data: dashboard,
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
    const dashboard = await updateDashboard(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: dashboard,
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
    const result = await deleteDashboard(req.params.id);

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