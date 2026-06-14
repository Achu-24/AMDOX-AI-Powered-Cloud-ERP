import { Request, Response } from "express";
import {
  createWidget,
  getAllWidgets,
  getWidgetById,
  updateWidget,
  deleteWidget,
} from "../services/widgetService";

export const create = async (req: Request, res: Response) => {
  try {
    const widget = await createWidget(req.body);

    res.status(201).json({
      success: true,
      data: widget,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getWidgets = async (
  req: Request,
  res: Response
) => {
  try {
    const widgets = await getAllWidgets();

    res.status(200).json({
      success: true,
      data: widgets,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getWidget = async (
  req: any,
  res: Response
) => {
  try {
    const widget = await getWidgetById(req.params.id);

    res.status(200).json({
      success: true,
      data: widget,
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
    const widget = await updateWidget(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: widget,
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
    const result = await deleteWidget(req.params.id);

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