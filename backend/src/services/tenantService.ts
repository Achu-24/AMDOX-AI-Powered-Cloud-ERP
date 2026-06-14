const Tenant = require("../models/Tenant");

export const createTenant = async (data: any) => {
  return await Tenant.create(data);
};

export const getAllTenants = async () => {
  return await Tenant.find();
};

export const getTenantById = async (id: string) => {
  const tenant = await Tenant.findById(id);

  if (!tenant) {
    throw new Error("Tenant not found");
  }

  return tenant;
};

export const updateTenant = async (
  id: string,
  data: any
) => {
  const tenant = await Tenant.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!tenant) {
    throw new Error("Tenant not found");
  }

  return tenant;
};

export const deleteTenant = async (id: string) => {
  const tenant = await Tenant.findByIdAndDelete(id);

  if (!tenant) {
    throw new Error("Tenant not found");
  }

  return {
    message: "Tenant deleted successfully",
  };
};