import { Request, Response } from "express";

import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../services/projectService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const project = await createProject(req.body);

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProjects = async (
  req: Request,
  res: Response
) => {
  try {
    const projects = await getAllProjects();

    res.status(200).json({
      success: true,
      data: projects,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProject = async (
  req: any,
  res: Response
) => {
  try {
    const project = await getProjectById(req.params.id);

    res.status(200).json({
      success: true,
      data: project,
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
    const project = await updateProject(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: project,
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
    const result = await deleteProject(req.params.id);

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