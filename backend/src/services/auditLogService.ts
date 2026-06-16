const { AuditLog } = require("../models/audit/AuditLog");

export const createAuditLog = async (data: any) =>
  await AuditLog.create(data);

export const getAllAuditLogs = async () =>
  await AuditLog.find();

export const getAuditLogById = async (id: string) => {
  const auditLog = await AuditLog.findById(id);

  if (!auditLog) throw new Error("Audit Log not found");

  return auditLog;
};

export const updateAuditLog = async (
  id: string,
  data: any
) => {
  const auditLog = await AuditLog.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!auditLog) throw new Error("Audit Log not found");

  return auditLog;
};

export const deleteAuditLog = async (id: string) => {
  const auditLog = await AuditLog.findByIdAndDelete(id);

  if (!auditLog) throw new Error("Audit Log not found");

  return {
    message: "Audit Log deleted successfully",
  };
};