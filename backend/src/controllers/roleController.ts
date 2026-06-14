import { Request, Response } from "express";

import {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
} from "../services/roleService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const role = await createRole(req.body);

    res.status(201).json({
      success: true,
      data: role,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getRoles = async (
  req: Request,
  res: Response
) => {
  try {
    const roles = await getAllRoles();

    res.status(200).json({
      success: true,
      data: roles,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getRole = async (
  req: any,
  res: Response
) => {
  try {
    const role = await getRoleById(req.params.id);

    res.status(200).json({
      success: true,
      data: role,
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
    const role = await updateRole(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: role,
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
    const result = await deleteRole(
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