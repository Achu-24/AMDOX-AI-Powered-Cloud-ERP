const { Attendance } = require("../models/hr/HR");

export const createAttendance = async (data: any) => {
  return await Attendance.create(data);
};

export const getAllAttendance = async () => {
  return await Attendance.find();
};

export const getAttendanceById = async (id: string) => {
  const attendance = await Attendance.findById(id);

  if (!attendance) {
    throw new Error("Attendance not found");
  }

  return attendance;
};

export const updateAttendance = async (
  id: string,
  data: any
) => {
  const attendance = await Attendance.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!attendance) {
    throw new Error("Attendance not found");
  }

  return attendance;
};

export const deleteAttendance = async (id: string) => {
  const attendance = await Attendance.findByIdAndDelete(id);

  if (!attendance) {
    throw new Error("Attendance not found");
  }

  return {
    message: "Attendance deleted successfully",
  };
};