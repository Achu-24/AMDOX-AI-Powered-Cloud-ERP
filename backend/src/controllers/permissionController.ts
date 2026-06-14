import { Request, Response } from "express";

import {
  createPermission,
  getAllPermissions,
  getPermissionById,
  updatePermission,
  deletePermission,
} from "../services/permissionService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const permission = await createPermission(req.body);

    res.status(201).json({
      success: true,
      data: permission,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPermissions = async (
  req: Request,
  res: Response
) => {
  try {
    const permissions = await getAllPermissions();

    res.status(200).json({
      success: true,
      data: permissions,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPermission = async (
  req: any,
  res: Response
) => {
  try {
    const permission = await getPermissionById(req.params.id);

    res.status(200).json({
      success: true,
      data: permission,
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
    const permission = await updatePermission(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: permission,
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
    const result = await deletePermission(req.params.id);

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