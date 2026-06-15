const { Task } = require("../models/project/Project");

export const createTask = async (data: any) =>
  await Task.create(data);

export const getAllTasks = async () =>
  await Task.find();

export const getTaskById = async (id: string) => {
  const task = await Task.findById(id);

  if (!task) throw new Error("Task not found");

  return task;
};

export const updateTask = async (
  id: string,
  data: any
) => {
  const task = await Task.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!task) throw new Error("Task not found");

  return task;
};

export const deleteTask = async (id: string) => {
  const task = await Task.findByIdAndDelete(id);

  if (!task) throw new Error("Task not found");

  return {
    message: "Task deleted successfully",
  };
};