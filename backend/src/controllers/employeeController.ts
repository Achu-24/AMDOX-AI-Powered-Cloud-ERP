import { Request, Response } from "express";

import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const employee = await createEmployee(req.body);

    res.status(201).json({
      success: true,
      data: employee,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getEmployees = async (
  req: Request,
  res: Response
) => {
  try {
    const employees = await getAllEmployees();

    res.status(200).json({
      success: true,
      data: employees,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getEmployee = async (
  req: any,
  res: Response
) => {
  try {
    const employee = await getEmployeeById(req.params.id);

    res.status(200).json({
      success: true,
      data: employee,
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
    const employee = await updateEmployee(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: employee,
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
    const result = await deleteEmployee(req.params.id);

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