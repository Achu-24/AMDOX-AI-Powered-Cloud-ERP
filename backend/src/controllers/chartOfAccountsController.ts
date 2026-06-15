import { Request, Response } from "express";

import {
  createAccount,
  getAllAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
} from "../services/chartOfAccountsService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const account = await createAccount(req.body);

    res.status(201).json({
      success: true,
      data: account,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAccounts = async (
  req: Request,
  res: Response
) => {
  try {
    const accounts = await getAllAccounts();

    res.status(200).json({
      success: true,
      data: accounts,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAccount = async (
  req: any,
  res: Response
) => {
  try {
    const account = await getAccountById(req.params.id);

    res.status(200).json({
      success: true,
      data: account,
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
    const account = await updateAccount(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: account,
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
    const result = await deleteAccount(req.params.id);

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