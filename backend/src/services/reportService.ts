const { Report } = require("../models/dashboard/Dashboard");

export const createReport = async (data: any) =>
  await Report.create(data);

export const getAllReports = async () =>
  await Report.find();

export const getReportById = async (id: string) => {
  const report = await Report.findById(id);

  if (!report) throw new Error("Report not found");

  return report;
};

export const updateReport = async (
  id: string,
  data: any
) => {
  const report = await Report.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!report) throw new Error("Report not found");

  return report;
};

export const deleteReport = async (id: string) => {
  const report = await Report.findByIdAndDelete(id);

  if (!report) throw new Error("Report not found");

  return {
    message: "Report deleted successfully",
  };
};