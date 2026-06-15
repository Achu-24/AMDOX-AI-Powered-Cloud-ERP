import { Request, Response } from "express";

import {
  createForecast,
  getAllForecasts,
  getForecastById,
  updateForecast,
  deleteForecast,
} from "../services/forecastService";

export const create = async (req: Request, res: Response) => {
  try {
    const forecast = await createForecast(req.body);

    res.status(201).json({
      success: true,
      data: forecast,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getForecasts = async (
  req: Request,
  res: Response
) => {
  try {
    const forecasts = await getAllForecasts();

    res.status(200).json({
      success: true,
      data: forecasts,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getForecast = async (
  req: any,
  res: Response
) => {
  try {
    const forecast = await getForecastById(req.params.id);

    res.status(200).json({
      success: true,
      data: forecast,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (req: any, res: Response) => {
  try {
    const forecast = await updateForecast(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: forecast,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (req: any, res: Response) => {
  try {
    const result = await deleteForecast(req.params.id);

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