const { Vendor } = require("../models/supplyChain/SupplyChain");

export const createVendor = async (data: any) =>
  await Vendor.create(data);

export const getAllVendors = async () =>
  await Vendor.find();

export const getVendorById = async (id: string) => {
  const vendor = await Vendor.findById(id);

  if (!vendor) throw new Error("Vendor not found");

  return vendor;
};

export const updateVendor = async (
  id: string,
  data: any
) => {
  const vendor = await Vendor.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!vendor) throw new Error("Vendor not found");

  return vendor;
};

export const deleteVendor = async (id: string) => {
  const vendor = await Vendor.findByIdAndDelete(id);

  if (!vendor) throw new Error("Vendor not found");

  return {
    message: "Vendor deleted successfully",
  };
};