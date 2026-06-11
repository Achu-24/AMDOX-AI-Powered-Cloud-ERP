import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authService";

export const register = async (req: Request, res: Response) => {
  try {
    const { tenantId, name, email, password } = req.body;

    const result = await registerUser(
      tenantId,
      name,
      email,
      password
    );

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error: any) {
    console.error("REGISTER ERROR:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error: any) {
    console.error("LOGIN ERROR:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};