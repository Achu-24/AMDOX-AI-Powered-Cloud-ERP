import { Request, Response } from "express";

import {
  createBudget,
  getAllBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
} from "../services/budgetService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const budget = await createBudget(req.body);

    res.status(201).json({
      success: true,
      data: budget,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBudgets = async (
  req: Request,
  res: Response
) => {
  try {
    const budgets = await getAllBudgets();

    res.status(200).json({
      success: true,
      data: budgets,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBudget = async (
  req: any,
  res: Response
) => {
  try {
    const budget = await getBudgetById(req.params.id);

    res.status(200).json({
      success: true,
      data: budget,
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
    const budget = await updateBudget(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: budget,
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
    const result = await deleteBudget(req.params.id);

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