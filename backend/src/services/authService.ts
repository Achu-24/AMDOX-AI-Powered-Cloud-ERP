const User = require("../models/User");
const { generateToken } = require("../utils/jwt");

export const registerUser = async (
  tenantId: string,
  name: string,
  email: string,
  password: string
) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await User.create({
    tenantId,
    name,
    email,
    password,
  });

  const token = generateToken(user._id.toString());

  return { user, token };
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user._id.toString());

  return { user, token };
};