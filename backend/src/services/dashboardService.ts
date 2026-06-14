const { Dashboard } = require("../models/dashboard/Dashboard");

export const createDashboard = async (data: any) => {
  return await Dashboard.create(data);
};

export const getAllDashboards = async () => {
  return await Dashboard.find();
};

export const getDashboardById = async (id: string) => {
  const dashboard = await Dashboard.findById(id);

  if (!dashboard) {
    throw new Error("Dashboard not found");
  }

  return dashboard;
};

export const updateDashboard = async (
  id: string,
  data: any
) => {
  const dashboard = await Dashboard.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!dashboard) {
    throw new Error("Dashboard not found");
  }

  return dashboard;
};

export const deleteDashboard = async (id: string) => {
  const dashboard = await Dashboard.findByIdAndDelete(id);

  if (!dashboard) {
    throw new Error("Dashboard not found");
  }

  return {
    message: "Dashboard deleted successfully",
  };
};