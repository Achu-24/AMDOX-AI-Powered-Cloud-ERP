const { JournalEntry } = require("../models/finance/Finance");

export const createJournalEntry = async (data: any) =>
  await JournalEntry.create(data);

export const getAllJournalEntries = async () =>
  await JournalEntry.find();

export const getJournalEntryById = async (id: string) => {
  const entry = await JournalEntry.findById(id);

  if (!entry) throw new Error("Journal entry not found");

  return entry;
};

export const updateJournalEntry = async (
  id: string,
  data: any
) => {
  const entry = await JournalEntry.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true }
  );

  if (!entry) throw new Error("Journal entry not found");

  return entry;
};

export const deleteJournalEntry = async (id: string) => {
  const entry = await JournalEntry.findByIdAndDelete(id);

  if (!entry) throw new Error("Journal entry not found");

  return {
    message: "Journal entry deleted successfully",
  };
};