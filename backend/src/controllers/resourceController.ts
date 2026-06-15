import { Request, Response } from "express";

import {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
} from "../services/resourceService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const resource = await createResource(req.body);

    res.status(201).json({
      success: true,
      data: resource,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getResources = async (
  req: Request,
  res: Response
) => {
  try {
    const resources = await getAllResources();

    res.status(200).json({
      success: true,
      data: resources,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getResource = async (
  req: any,
  res: Response
) => {
  try {
    const resource = await getResourceById(req.params.id);

    res.status(200).json({
      success: true,
      data: resource,
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
    const resource = await updateResource(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: resource,
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
    const result = await deleteResource(req.params.id);

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