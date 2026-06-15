const { Invoice } = require("../models/finance/Finance");

export const createInvoice = async (data: any) =>
  await Invoice.create(data);

export const getAllInvoices = async () =>
  await Invoice.find();

export const getInvoiceById = async (id: string) => {
  const invoice = await Invoice.findById(id);
  if (!invoice) throw new Error("Invoice not found");
  return invoice;
};

export const updateInvoice = async (id: string, data: any) => {
  const invoice = await Invoice.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!invoice) throw new Error("Invoice not found");

  return invoice;
};

export const deleteInvoice = async (id: string) => {
  const invoice = await Invoice.findByIdAndDelete(id);

  if (!invoice) throw new Error("Invoice not found");

  return { message: "Invoice deleted successfully" };
};