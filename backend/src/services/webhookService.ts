const { Webhook } = require("../models/notification/Notification");

export const createWebhook = async (data: any) =>
  await Webhook.create(data);

export const getAllWebhooks = async () =>
  await Webhook.find();

export const getWebhookById = async (id: string) => {
  const webhook = await Webhook.findById(id);

  if (!webhook) throw new Error("Webhook not found");

  return webhook;
};

export const updateWebhook = async (
  id: string,
  data: any
) => {
  const webhook = await Webhook.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!webhook) throw new Error("Webhook not found");

  return webhook;
};

export const deleteWebhook = async (id: string) => {
  const webhook = await Webhook.findByIdAndDelete(id);

  if (!webhook) throw new Error("Webhook not found");

  return {
    message: "Webhook deleted successfully",
  };
};