const { Event } = require("../models/notification/Notification");

export const createEvent = async (data: any) =>
  await Event.create(data);

export const getAllEvents = async () =>
  await Event.find();

export const getEventById = async (id: string) => {
  const event = await Event.findById(id);

  if (!event) throw new Error("Event not found");

  return event;
};

export const updateEvent = async (
  id: string,
  data: any
) => {
  const event = await Event.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!event) throw new Error("Event not found");

  return event;
};

export const deleteEvent = async (id: string) => {
  const event = await Event.findByIdAndDelete(id);

  if (!event) throw new Error("Event not found");

  return {
    message: "Event deleted successfully",
  };
};