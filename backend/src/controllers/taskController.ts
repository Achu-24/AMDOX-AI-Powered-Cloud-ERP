import { Request, Response } from "express";

import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../services/taskService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const task = await createTask(req.body);

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTasks = async (
  req: Request,
  res: Response
) => {
  try {
    const tasks = await getAllTasks();

    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTask = async (
  req: any,
  res: Response
) => {
  try {
    const task = await getTaskById(req.params.id);

    res.status(200).json({
      success: true,
      data: task,
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
    const task = await updateTask(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: task,
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
    const result = await deleteTask(req.params.id);

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