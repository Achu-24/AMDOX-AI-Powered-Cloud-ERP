const { Permission } = require("../models/Role");

export const createPermission = async (data: any) => {
  return await Permission.create(data);
};

export const getAllPermissions = async () => {
  return await Permission.find();
};

export const getPermissionById = async (id: string) => {
  const permission = await Permission.findById(id);

  if (!permission) {
    throw new Error("Permission not found");
  }

  return permission;
};

export const updatePermission = async (
  id: string,
  data: any
) => {
  const permission = await Permission.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!permission) {
    throw new Error("Permission not found");
  }

  return permission;
};

export const deletePermission = async (id: string) => {
  const permission = await Permission.findByIdAndDelete(id);

  if (!permission) {
    throw new Error("Permission not found");
  }

  return {
    message: "Permission deleted successfully",
  };
};