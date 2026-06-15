import { Request, Response } from "express";

import {
  createNotification,
  getAllNotifications,
  getNotificationById,
  updateNotification,
  deleteNotification,
} from "../services/notificationService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const notification = await createNotification(req.body);

    res.status(201).json({
      success: true,
      data: notification,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getNotifications = async (
  req: Request,
  res: Response
) => {
  try {
    const notifications = await getAllNotifications();

    res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getNotification = async (
  req: any,
  res: Response
) => {
  try {
    const notification = await getNotificationById(
      req.params.id
    );

    res.status(200).json({
      success: true,
      data: notification,
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
    const notification = await updateNotification(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: notification,
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
    const result = await deleteNotification(
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