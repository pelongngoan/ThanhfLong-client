import type { LoginRequest, RegisterRequest } from "../types/auth";
import axiosInstance from "./axiosInstance";

export const registerApi = async (user: RegisterRequest) => {
  const res = await axiosInstance.post("api/auth/register", user);
  return res;
};

export const loginApi = async (user: LoginRequest) => {
  const res = await axiosInstance.post("api/auth/login", user);
  console.log(res);
  return res;
};
