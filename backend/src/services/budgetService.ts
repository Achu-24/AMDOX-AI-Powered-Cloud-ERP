const { Budget } = require("../models/project/Project");

export const createBudget = async (data: any) =>
  await Budget.create(data);

export const getAllBudgets = async () =>
  await Budget.find();

export const getBudgetById = async (id: string) => {
  const budget = await Budget.findById(id);

  if (!budget) throw new Error("Budget not found");

  return budget;
};

export const updateBudget = async (
  id: string,
  data: any
) => {
  const budget = await Budget.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!budget) throw new Error("Budget not found");

  return budget;
};

export const deleteBudget = async (id: string) => {
  const budget = await Budget.findByIdAndDelete(id);

  if (!budget) throw new Error("Budget not found");

  return {
    message: "Budget deleted successfully",
  };
};