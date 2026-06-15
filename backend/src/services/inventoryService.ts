const { Inventory } = require("../models/supplyChain/SupplyChain");

export const createInventory = async (data: any) =>
  await Inventory.create(data);

export const getAllInventories = async () =>
  await Inventory.find();

export const getInventoryById = async (id: string) => {
  const inventory = await Inventory.findById(id);

  if (!inventory) throw new Error("Inventory not found");

  return inventory;
};

export const updateInventory = async (
  id: string,
  data: any
) => {
  const inventory = await Inventory.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!inventory) throw new Error("Inventory not found");

  return inventory;
};

export const deleteInventory = async (id: string) => {
  const inventory = await Inventory.findByIdAndDelete(id);

  if (!inventory) throw new Error("Inventory not found");

  return {
    message: "Inventory deleted successfully",
  };
};