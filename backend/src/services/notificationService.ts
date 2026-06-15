const { Notification } = require("../models/notification/Notification");

export const createNotification = async (data: any) =>
  await Notification.create(data);

export const getAllNotifications = async () =>
  await Notification.find();

export const getNotificationById = async (id: string) => {
  const notification = await Notification.findById(id);

  if (!notification) throw new Error("Notification not found");

  return notification;
};

export const updateNotification = async (
  id: string,
  data: any
) => {
  const notification = await Notification.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!notification) throw new Error("Notification not found");

  return notification;
};

export const deleteNotification = async (id: string) => {
  const notification = await Notification.findByIdAndDelete(id);

  if (!notification) throw new Error("Notification not found");

  return {
    message: "Notification deleted successfully",
  };
};