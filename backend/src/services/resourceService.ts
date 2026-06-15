const { Resource } = require("../models/project/Project");

export const createResource = async (data: any) =>
  await Resource.create(data);

export const getAllResources = async () =>
  await Resource.find();

export const getResourceById = async (id: string) => {
  const resource = await Resource.findById(id);

  if (!resource) throw new Error("Resource not found");

  return resource;
};

export const updateResource = async (
  id: string,
  data: any
) => {
  const resource = await Resource.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!resource) throw new Error("Resource not found");

  return resource;
};

export const deleteResource = async (id: string) => {
  const resource = await Resource.findByIdAndDelete(id);

  if (!resource) throw new Error("Resource not found");

  return {
    message: "Resource deleted successfully",
  };
};