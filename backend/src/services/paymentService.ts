const { Payment } = require("../models/finance/Finance");

export const createPayment = async (data: any) =>
  await Payment.create(data);

export const getAllPayments = async () =>
  await Payment.find();

export const getPaymentById = async (id: string) => {
  const payment = await Payment.findById(id);

  if (!payment) throw new Error("Payment not found");

  return payment;
};

export const updatePayment = async (id: string, data: any) => {
  const payment = await Payment.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!payment) throw new Error("Payment not found");

  return payment;
};

export const deletePayment = async (id: string) => {
  const payment = await Payment.findByIdAndDelete(id);

  if (!payment) throw new Error("Payment not found");

  return { message: "Payment deleted successfully" };
};