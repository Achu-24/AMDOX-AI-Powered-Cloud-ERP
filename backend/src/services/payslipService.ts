const { Payslip } = require("../models/hr/HR");

export const createPayslip = async (data: any) =>
  await Payslip.create(data);

export const getAllPayslips = async () =>
  await Payslip.find();

export const getPayslipById = async (id: string) => {
  const payslip = await Payslip.findById(id);

  if (!payslip) throw new Error("Payslip not found");

  return payslip;
};

export const updatePayslip = async (
  id: string,
  data: any
) => {
  const payslip = await Payslip.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!payslip) throw new Error("Payslip not found");

  return payslip;
};

export const deletePayslip = async (id: string) => {
  const payslip = await Payslip.findByIdAndDelete(id);

  if (!payslip) throw new Error("Payslip not found");

  return {
    message: "Payslip deleted successfully",
  };
};