    import { Request, Response } from "express";

import {
  createTenant,
  getAllTenants,
  getTenantById,
  updateTenant,
  deleteTenant,
} from "../services/tenantService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const tenant = await createTenant(req.body);

    res.status(201).json({
      success: true,
      data: tenant,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTenants = async (
  req: Request,
  res: Response
) => {
  try {
    const tenants = await getAllTenants();

    res.status(200).json({
      success: true,
      data: tenants,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTenant = async (
  req: any,
  res: Response
) => {
  try {
    const tenant = await getTenantById(req.params.id);

    res.status(200).json({
      success: true,
      data: tenant,
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
    const tenant = await updateTenant(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: tenant,
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
    const result = await deleteTenant(req.params.id);

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