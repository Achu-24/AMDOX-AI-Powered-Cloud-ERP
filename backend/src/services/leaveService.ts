const { Leave } = require("../models/hr/HR");

export const createLeave = async (data: any) =>
  await Leave.create(data);

export const getAllLeaves = async () =>
  await Leave.find();

export const getLeaveById = async (id: string) => {
  const leave = await Leave.findById(id);
  if (!leave) throw new Error("Leave not found");
  return leave;
};

export const updateLeave = async (id: string, data: any) => {
  const leave = await Leave.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!leave) throw new Error("Leave not found");

  return leave;
};

export const deleteLeave = async (id: string) => {
  const leave = await Leave.findByIdAndDelete(id);

  if (!leave) throw new Error("Leave not found");

  return { message: "Leave deleted successfully" };
};