import { Request, Response } from "express";

import {
  createCurrency,
  getAllCurrencies,
  getCurrencyById,
  updateCurrency,
  deleteCurrency,
} from "../services/currencyService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const currency = await createCurrency(req.body);

    res.status(201).json({
      success: true,
      data: currency,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCurrencies = async (
  req: Request,
  res: Response
) => {
  try {
    const currencies = await getAllCurrencies();

    res.status(200).json({
      success: true,
      data: currencies,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCurrency = async (
  req: any,
  res: Response
) => {
  try {
    const currency = await getCurrencyById(req.params.id);

    res.status(200).json({
      success: true,
      data: currency,
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
    const currency = await updateCurrency(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: currency,
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
    const result = await deleteCurrency(req.params.id);

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