const { GoodsReceipt } = require("../models/supplyChain/SupplyChain");

export const createGoodsReceipt = async (data: any) =>
  await GoodsReceipt.create(data);

export const getAllGoodsReceipts = async () =>
  await GoodsReceipt.find();

export const getGoodsReceiptById = async (id: string) => {
  const receipt = await GoodsReceipt.findById(id);

  if (!receipt) throw new Error("Goods Receipt not found");

  return receipt;
};

export const updateGoodsReceipt = async (
  id: string,
  data: any
) => {
  const receipt = await GoodsReceipt.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!receipt) throw new Error("Goods Receipt not found");

  return receipt;
};

export const deleteGoodsReceipt = async (id: string) => {
  const receipt = await GoodsReceipt.findByIdAndDelete(id);

  if (!receipt) throw new Error("Goods Receipt not found");

  return {
    message: "Goods Receipt deleted successfully",
  };
};