const { ChartOfAccounts } = require("../models/finance/Finance");

export const createAccount = async (data: any) => {
  return await ChartOfAccounts.create(data);
};

export const getAllAccounts = async () => {
  return await ChartOfAccounts.find();
};

export const getAccountById = async (id: string) => {
  const account = await ChartOfAccounts.findById(id);

  if (!account) {
    throw new Error("Account not found");
  }

  return account;
};

export const updateAccount = async (
  id: string,
  data: any
) => {
  const account = await ChartOfAccounts.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!account) {
    throw new Error("Account not found");
  }

  return account;
};

export const deleteAccount = async (id: string) => {
  const account = await ChartOfAccounts.findByIdAndDelete(id);

  if (!account) {
    throw new Error("Account not found");
  }

  return {
    message: "Account deleted successfully",
  };
};