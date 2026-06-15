import { Request, Response } from "express";

import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../services/eventService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const event = await createEvent(req.body);

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getEvents = async (
  req: Request,
  res: Response
) => {
  try {
    const events = await getAllEvents();

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getEvent = async (
  req: any,
  res: Response
) => {
  try {
    const event = await getEventById(req.params.id);

    res.status(200).json({
      success: true,
      data: event,
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
    const event = await updateEvent(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: event,
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
    const result = await deleteEvent(req.params.id);

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