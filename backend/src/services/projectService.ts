const { Project } = require("../models/project/Project");

export const createProject = async (data: any) =>
  await Project.create(data);

export const getAllProjects = async () =>
  await Project.find();

export const getProjectById = async (id: string) => {
  const project = await Project.findById(id);

  if (!project) throw new Error("Project not found");

  return project;
};

export const updateProject = async (
  id: string,
  data: any
) => {
  const project = await Project.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!project) throw new Error("Project not found");

  return project;
};

export const deleteProject = async (id: string) => {
  const project = await Project.findByIdAndDelete(id);

  if (!project) throw new Error("Project not found");

  return {
    message: "Project deleted successfully",
  };
};