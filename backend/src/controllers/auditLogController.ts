import { Request, Response } from "express";

import {
  createAuditLog,
  getAllAuditLogs,
  getAuditLogById,
  updateAuditLog,
  deleteAuditLog,
} from "../services/auditLogService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const auditLog = await createAuditLog(req.body);

    res.status(201).json({
      success: true,
      data: auditLog,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAuditLogs = async (
  req: Request,
  res: Response
) => {
  try {
    const auditLogs = await getAllAuditLogs();

    res.status(200).json({
      success: true,
      data: auditLogs,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAuditLog = async (
  req: any,
  res: Response
) => {
  try {
    const auditLog = await getAuditLogById(req.params.id);

    res.status(200).json({
      success: true,
      data: auditLog,
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
    const auditLog = await updateAuditLog(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: auditLog,
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
    const result = await deleteAuditLog(
      req.params.id
    );

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