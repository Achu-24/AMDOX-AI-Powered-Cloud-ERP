import { Request, Response } from "express";

import {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
} from "../services/invoiceService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const invoice = await createInvoice(req.body);

    res.status(201).json({
      success: true,
      data: invoice,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getInvoices = async (
  req: Request,
  res: Response
) => {
  try {
    const invoices = await getAllInvoices();

    res.status(200).json({
      success: true,
      data: invoices,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getInvoice = async (
  req: any,
  res: Response
) => {
  try {
    const invoice = await getInvoiceById(req.params.id);

    res.status(200).json({
      success: true,
      data: invoice,
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
    const invoice = await updateInvoice(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      data: invoice,
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
    const result = await deleteInvoice(req.params.id);

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