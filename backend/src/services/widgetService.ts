const { Widget } = require("../models/dashboard/Dashboard");

export const createWidget = async (data: any) =>
  await Widget.create(data);

export const getAllWidgets = async () =>
  await Widget.find();

export const getWidgetById = async (id: string) => {
  const widget = await Widget.findById(id);
  if (!widget) throw new Error("Widget not found");
  return widget;
};

export const updateWidget = async (
  id: string,
  data: any
) => {
  const widget = await Widget.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!widget) throw new Error("Widget not found");

  return widget;
};

export const deleteWidget = async (id: string) => {
  const widget = await Widget.findByIdAndDelete(id);

  if (!widget) throw new Error("Widget not found");

  return {
    message: "Widget deleted successfully",
  };
};