const { Forecast } = require("../models/supplyChain/SupplyChain");

export const createForecast = async (data: any) =>
  await Forecast.create(data);

export const getAllForecasts = async () =>
  await Forecast.find();

export const getForecastById = async (id: string) => {
  const forecast = await Forecast.findById(id);

  if (!forecast) throw new Error("Forecast not found");

  return forecast;
};

export const updateForecast = async (
  id: string,
  data: any
) => {
  const forecast = await Forecast.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!forecast) throw new Error("Forecast not found");

  return forecast;
};

export const deleteForecast = async (id: string) => {
  const forecast = await Forecast.findByIdAndDelete(id);

  if (!forecast) throw new Error("Forecast not found");

  return {
    message: "Forecast deleted successfully",
  };
};