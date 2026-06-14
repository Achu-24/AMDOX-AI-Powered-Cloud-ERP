const { Role } = require("../models/Role");

export const createRole = async (data: any) => {
  return await Role.create(data);
};

export const getAllRoles = async () => {
  return await Role.find().populate("permissions");
};

export const getRoleById = async (id: string) => {
  const role = await Role.findById(id).populate("permissions");

  if (!role) {
    throw new Error("Role not found");
  }

  return role;
};

export const updateRole = async (
  id: string,
  data: any
) => {
  const role = await Role.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  ).populate("permissions");

  if (!role) {
    throw new Error("Role not found");
  }

  return role;
};

export const deleteRole = async (id: string) => {
  const role = await Role.findByIdAndDelete(id);

  if (!role) {
    throw new Error("Role not found");
  }

  return {
    message: "Role deleted successfully",
  };
};