const { Payroll } = require("../models/hr/HR");

export const createPayroll = async (data: any) =>
  await Payroll.create(data);

export const getAllPayrolls = async () =>
  await Payroll.find();

export const getPayrollById = async (id: string) => {
  const payroll = await Payroll.findById(id);
  if (!payroll) throw new Error("Payroll not found");
  return payroll;
};

export const updatePayroll = async (
  id: string,
  data: any
) => {
  const payroll = await Payroll.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!payroll) throw new Error("Payroll not found");

  return payroll;
};

export const deletePayroll = async (id: string) => {
  const payroll = await Payroll.findByIdAndDelete(id);

  if (!payroll) throw new Error("Payroll not found");

  return {
    message: "Payroll deleted successfully",
  };
};