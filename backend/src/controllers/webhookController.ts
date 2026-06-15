import { Request, Response } from "express";

import {
  createWebhook,
  getAllWebhooks,
  getWebhookById,
  updateWebhook,
  deleteWebhook,
} from "../services/webhookService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const webhook = await createWebhook(req.body);

    res.status(201).json({
      success: true,
      data: webhook,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getWebhooks = async (
  req: Request,
  res: Response
) => {
  try {
    const webhooks = await getAllWebhooks();

    res.status(200).json({
      success: true,
      data: webhooks,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getWebhook = async (
  req: any,
  res: Response
) => {
  try {
    const webhook = await getWebhookById(
      req.params.id
    );

    res.status(200).json({
      success: true,
      data: webhook,
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
    const webhook = await updateWebhook(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: webhook,
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
    const result = await deleteWebhook(
      req.params.id
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