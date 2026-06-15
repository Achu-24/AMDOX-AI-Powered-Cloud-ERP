const { PurchaseOrder } = require("../models/supplyChain/SupplyChain");

export const createPurchaseOrder = async (data: any) =>
  await PurchaseOrder.create(data);

export const getAllPurchaseOrders = async () =>
  await PurchaseOrder.find();

export const getPurchaseOrderById = async (id: string) => {
  const po = await PurchaseOrder.findById(id);

  if (!po) throw new Error("Purchase Order not found");

  return po;
};

export const updatePurchaseOrder = async (
  id: string,
  data: any
) => {
  const po = await PurchaseOrder.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!po) throw new Error("Purchase Order not found");

  return po;
};

export const deletePurchaseOrder = async (id: string) => {
  const po = await PurchaseOrder.findByIdAndDelete(id);

  if (!po) throw new Error("Purchase Order not found");

  return {
    message: "Purchase Order deleted successfully",
  };
};