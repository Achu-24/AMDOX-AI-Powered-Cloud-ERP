import { Request, Response } from "express";

import {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/userService";

export const getUsers = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await getAllUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await getUserById(
      (req.params as any).id
    );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const editUser = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await updateUser(
      (req.params as any).id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeUser = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await deleteUser(
      (req.params as any).id
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