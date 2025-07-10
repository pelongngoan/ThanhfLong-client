import { useState } from "react";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/auth";
import { loginApi, registerApi } from "../api/authApi";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async ({
    email,
    password,
  }: LoginRequest): Promise<LoginResponse> => {
    const response = await loginApi({ email, password } as LoginRequest);
    console.log(response);

    return response;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const register = async ({
    username,
    email,
    password,
  }: RegisterRequest): Promise<RegisterResponse> => {
    const response = await registerApi({ username, email, password });
    return response;
  };

  return { isAuthenticated, login, logout, register };
};

export default useAuth;
