const { Employee } = require("../models/hr/HR");

export const createEmployee = async (data: any) => {
  return await Employee.create(data);
};

export const getAllEmployees = async () => {
  return await Employee.find();
};

export const getEmployeeById = async (id: string) => {
  const employee = await Employee.findById(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

export const updateEmployee = async (
  id: string,
  data: any
) => {
  const employee = await Employee.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

export const deleteEmployee = async (id: string) => {
  const employee = await Employee.findByIdAndDelete(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  return {
    message: "Employee deleted successfully",
  };
};