import { Request, Response } from "express";

import {
  createJournalEntry,
  getAllJournalEntries,
  getJournalEntryById,
  updateJournalEntry,
  deleteJournalEntry,
} from "../services/journalEntryService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const entry = await createJournalEntry(req.body);

    res.status(201).json({
      success: true,
      data: entry,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getJournalEntries = async (
  req: Request,
  res: Response
) => {
  try {
    const entries = await getAllJournalEntries();

    res.status(200).json({
      success: true,
      data: entries,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getJournalEntry = async (
  req: any,
  res: Response
) => {
  try {
    const entry = await getJournalEntryById(req.params.id);

    res.status(200).json({
      success: true,
      data: entry,
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
    const entry = await updateJournalEntry(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: entry,
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
    const result = await deleteJournalEntry(req.params.id);

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