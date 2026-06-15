const { Currency } = require("../models/finance/Finance");

export const createCurrency = async (data: any) =>
  await Currency.create(data);

export const getAllCurrencies = async () =>
  await Currency.find();

export const getCurrencyById = async (id: string) => {
  const currency = await Currency.findById(id);

  if (!currency) throw new Error("Currency not found");

  return currency;
};

export const updateCurrency = async (id: string, data: any) => {
  const currency = await Currency.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!currency) throw new Error("Currency not found");

  return currency;
};

export const deleteCurrency = async (id: string) => {
  const currency = await Currency.findByIdAndDelete(id);

  if (!currency) throw new Error("Currency not found");

  return { message: "Currency deleted successfully" };
};